<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Subcategory;
use App\Models\Competency;

class CompetencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $problem = Subcategory::where('name', 'Problem Solving')->first();
        $adapt = Subcategory::where('name', 'Adaptability')->first();
        $coding = Subcategory::where('name', 'Coding Skills')->first();
        $db = Subcategory::where('name', 'Database Management')->first();

        Competency::insert([
            ['subcategory_id' => $problem->id, 'name' => 'Problem Solving'],
            ['subcategory_id' => $adapt->id, 'name' => 'Adaptability'],
            ['subcategory_id' => $coding->id, 'name' => 'Java'],
            ['subcategory_id' => $coding->id, 'name' => 'C++'],
            ['subcategory_id' => $db->id, 'name' => 'Writing SQL Queries'],
            ['subcategory_id' => $db->id, 'name' => 'Designing Database'],
        ]);
            }
}
