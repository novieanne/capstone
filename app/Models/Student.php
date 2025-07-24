<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'last_name',
        'first_name',
        'middle_initial',
        'section',
        'specialization',
        'company',
        'suitability',
        'status',
    ];

    public function scores() {
        return $this->hasMany(Score::class);
    }
}
