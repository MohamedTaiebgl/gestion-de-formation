<?php
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\CourseController;

Route::post('students', [StudentController::class, 'store']);
Route::get('students', [StudentController::class, 'index']);
Route::get('students/{id}', [StudentController::class, 'show']);
Route::put('students/{id}', [StudentController::class, 'update']);
Route::delete('students/{id}', [StudentController::class, 'destroy']);

Route::apiResource('teachers', TeacherController::class);
Route::apiResource('courses', CourseController::class);
