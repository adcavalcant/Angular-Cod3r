<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

Route::apiResource('clientes', 'App\Http\Controllers\Api\ClienteController');
Route::apiResource('products', 'App\Http\Controllers\Api\ProductController');
Route::apiResource('pensamentos', 'App\Http\Controllers\Api\PensamentoController');

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

<<<<<<< HEAD
    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken('auth-token')->plainTextToken;
=======
    Route::post('login', 'App\Http\Controllers\Api\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\Api\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\Api\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\Api\AuthController@me');
>>>>>>> fffde295d87d9cfd50c801b28eb335176aacaf32
});

Route::middleware('auth:sanctum')->get('users', 'App\Http\Controllers\Api\UserController@index');
