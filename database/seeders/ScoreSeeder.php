<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Competency;
use App\Models\Score;
use App\Models\Student;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competencies = Competency::with('subcategory')->get();

        foreach (Student::all() as $student) {
            foreach ($competencies as $competency) {
                $subcategoryName = $competency->subcategory->name;
            
                // If soft skill → score as percentage; if technical → level 1–3
                $score = in_array($subcategoryName, ['Problem Solving', 'Adaptability'])
                    ? rand(70, 100)
                    : rand(1, 3);
            
                Score::create([
                    'student_id' => $student->id,
                    'competency_id' => $competency->id,
                    'score' => $score,
                ]);
            }
        }
            }
}
