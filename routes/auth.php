<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthSessionController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\StudentController;

Route::middleware('guest')->group(function(){

    Route::get('login', [AuthSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthSessionController::class, 'store']);
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);

});

    Route::middleware('auth')->group(function(){
        
    Route::post('logout', [AuthSessionController::class, 'destroy'])->name('logout');
});
