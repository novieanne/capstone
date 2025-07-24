<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    public function student() {
    return $this->belongsTo(Student::class);
}

    public function competency() {
        return $this->belongsTo(Competency::class);
    }
}
