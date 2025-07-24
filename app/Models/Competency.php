<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Competency extends Model
{
    public function subcategory() {
    return $this->belongsTo(Subcategory::class);
}

    public function scores() {
        return $this->hasMany(Score::class);
    }
}
