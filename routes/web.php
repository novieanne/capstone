<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\HteController;
use App\Http\Controllers\ReportsController;

    
    Route::get('/', function () {
    return Redirect::to('/studentPage?tab=list');
    });

    Route::get('studentPage', [StudentController::class, 'index'])->name('studpage');
    Route::patch('/students/{student}/approve', [StudentController::class, 'approve'])->name('students.approve');
    Route::patch('/students/{student}/unmatch', [StudentController::class, 'unmatch'])->name('students.unmatch');
    Route::post(`/students/batchUnmatch`, [StudentController::class, 'batchUnmatch'])->name('students.batchUnmatch');
    Route::get('hte', [HteController::class, 'index'])->name('hte');
    Route::get('reports', [ReportsController::class, 'index'])->name('reports');
   


require __DIR__.'/auth.php';




//Route::get('/', [LandingPageController::class, 'index'])->name('welcome');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('studentPage', [StudentController::class, 'index'])->name('studpage');
//     Route::patch('/students/{student}/approve', [StudentController::class, 'approve'])->name('students.approve');
//     Route::patch('/students/{student}/unmatch', [StudentController::class, 'unmatch'])->name('students.unmatch');
//     Route::post(`/students/batchUnmatch`, [StudentController::class, 'batchUnmatch'])->name('students.batchUnmatch');
//     Route::get('hte', [HteController::class, 'index'])->name('hte');
//     Route::get('reports', [ReportsController::class, 'index'])->name('reports');

// });


