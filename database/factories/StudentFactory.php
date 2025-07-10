<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         $status = $this->faker->randomElement(['matched', 'placed']);
         $companies = ['Company A', 'Company B', 'Company C', 'Company D'];
         $sections = ['3A', '3B', '3C'];
         $specializations = ['BA', 'SM', 'WMAD'];

        return [
            'last_name' => $this->faker->lastName,
            'first_name' => $this->faker->firstName,
            'middle_initial' => strtoupper($this->faker->randomLetter),
            'section' => $this->faker->randomElement($sections),
            'specialization' => $this->faker->randomElement($specializations),
            'company' => $this->faker->randomElement($companies),
            'suitability' => $this->faker->numberBetween(80, 100),
            'status' => 'matched',
        ];
    }
}
