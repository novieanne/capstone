<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    public function category() {
    return $this->belongsTo(Category::class);
}

    public function competencies() {
        return $this->hasMany(Competency::class);
    }
}
