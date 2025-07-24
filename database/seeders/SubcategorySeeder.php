<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Subcategory;
use App\Models\Category;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $soft = Category::where('name', 'Soft Skills')->first();
        $tech = Category::where('name', 'Technical Skills')->first();

        Subcategory::insert([
            ['category_id' => $soft->id, 'name' => 'Problem Solving'],
            ['category_id' => $soft->id, 'name' => 'Adaptability'],
            ['category_id' => $tech->id, 'name' => 'Coding Skills'],
            ['category_id' => $tech->id, 'name' => 'Database Management'],
        ]);
            }
}
