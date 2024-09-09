<?php


namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    // Create a new teacher
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:teachers,email',
            'tel' => 'required|string|max:20',
            'pwd' => 'required|string|min:6',
        ]);

        $teacher = Teacher::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'tel' => $validated['tel'],
            'pwd' => bcrypt($validated['pwd']),
        ]);

        return response()->json($teacher, 201);
    }

    // Retrieve all teachers
    public function index()
    {
        $teachers = Teacher::all();
        return response()->json($teachers);
    }

    // Retrieve a single teacher by ID
    public function show($id)
    {
        $teacher = Teacher::findOrFail($id);
        return response()->json($teacher);
    }

    // Update an existing teacher
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:teachers,email,' . $id,
            'tel' => 'sometimes|required|string|max:15',
            'pwd' => 'sometimes|required|string|min:8',
        ]);

        $teacher = Teacher::findOrFail($id);
        $teacher->name = $request->name ?? $teacher->name;
        $teacher->email = $request->email ?? $teacher->email;
        $teacher->tel = $request->tel ?? $teacher->tel;
        if ($request->pwd) {
            $teacher->pwd = bcrypt($request->pwd);
        }
        $teacher->save();

        return response()->json(['message' => 'Teacher updated successfully!']);
    }

    // Delete a teacher
    public function destroy($id)
    {
        $teacher = Teacher::findOrFail($id);
        $teacher->delete();

        return response()->json(['message' => 'Teacher deleted successfully!']);
    }
}
