<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\LandingPageController;


Route::get('/', [LandingPageController::class, 'index'])->name('welcome');


Route::middleware(['auth', 'verified'])->group(function () {
 
    Route::get('dashboard', [StudentController::class, 'index'])->name('dashboard');
    Route::patch('/students/{student}/approve', [StudentController::class, 'approve'])->name('students.approve');
    Route::patch('/students/{student}/unmatch', [StudentController::class, 'unmatch'])->name('students.unmatch');

});





require __DIR__.'/auth.php';