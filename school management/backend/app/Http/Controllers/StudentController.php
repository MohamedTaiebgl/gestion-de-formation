<?php
namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Create a new student
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:students,email',
        'tel' => 'required|string|max:20',
        'pwd' => 'required|string|min:6',
    ]);

    $student = Student::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'tel' => $validated['tel'],
        'pwd' => bcrypt($validated['pwd']),
    ]);

    return response()->json($student, 201);
}
    // Retrieve all students
    public function index()
    {
        $students = Student::all();
        return response()->json($students);
    }

    // Retrieve a single student by ID
    public function show($id)
    {
        $student = Student::findOrFail($id);
        return response()->json($student);
    }

    // Update an existing student
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:students,email,' . $id,
            'tel' => 'sometimes|required|string|max:15',
            'pwd' => 'sometimes|required|string|min:8',
        ]);

        $student = Student::findOrFail($id);
        $student->name = $request->name ?? $student->name;
        $student->email = $request->email ?? $student->email;
        $student->tel = $request->tel ?? $student->tel;
        if ($request->pwd) {
            $student->pwd = bcrypt($request->pwd);
        }
        $student->save();

        return response()->json(['message' => 'Student updated successfully!']);
    }

    // Delete a student
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return response()->json(['message' => 'Student deleted successfully!']);
    }
}
