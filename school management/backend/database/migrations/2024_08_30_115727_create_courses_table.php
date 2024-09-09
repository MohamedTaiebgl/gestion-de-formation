<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('courses', function (Blueprint $table) {
        $table->id();
        $table->string('subject');
        $table->integer('duration'); // Duration in minutes
        $table->foreignId('teacher_id')->constrained()->onDelete('cascade'); // Assumes teachers table exists
        $table->date('date');
        $table->string('salle'); // Room number
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
