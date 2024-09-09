<?php
namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    // Retrieve all courses
    public function index()
    {
        $courses = Course::with('teacher')->get();
        return response()->json($courses);
    }

    // Retrieve a single course by ID
    public function show($id)
    {
        $course = Course::with('teacher')->findOrFail($id);
        return response()->json($course);
    }

    // Create a new course
    public function store(Request $request)
{
    // Validate the request data, including checking for salle availability
    $request->validate([
        'subject' => 'required|string|max:255',
        'duration' => 'required|integer|min:1',
        'teacher_id' => 'required|exists:teachers,id',
        'date' => 'required|date',
        'salle' => [
            'required',
            'string',
            'max:255',
            function ($attribute, $value, $fail) use ($request) {
                // Check if another course exists in the same salle at the same date/time
                $conflictingCourse = Course::where('salle', $value)
                    ->where('date', $request->date)
                    ->first();
                
                if ($conflictingCourse) {
                    $fail('The room is already booked at this time.');
                }
            },
        ],
    ]);

    // Create the course if validation passes
    $course = new Course($request->all());
    $course->save();

    return response()->json($course, 201);
}

public function update(Request $request, $id)
{
    // Validate the request data
    $request->validate([
        'subject' => 'required|string|max:255',
        'duration' => 'required|integer|min:1',
        'teacher_id' => 'required|exists:teachers,id',
        'date' => 'required|date',
        'salle' => [
            'required',
            'string',
            'max:255',
            function ($attribute, $value, $fail) use ($request, $id) {
                // Exclude the current course from the check
                $conflictingCourse = Course::where('salle', $value)
                    ->where('date', $request->date)
                    ->where('id', '!=', $id) // Exclude the current course
                    ->first();
                
                if ($conflictingCourse) {
                    $fail('The room is already booked at this time.');
                }
            },
        ],
    ]);

    // Update the course
    $course = Course::findOrFail($id);
    $course->update($request->all());

    return response()->json($course, 200);
}
    // Delete a course
    public function destroy($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json(['message' => 'Course deleted successfully!']);
    }
}
