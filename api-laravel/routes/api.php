<?php
use Illuminate\Support\Facades\Route;

Route::apiResource('clientes', 'App\Http\Controllers\Api\ClienteController');
Route::apiResource('products', 'App\Http\Controllers\Api\ProductController');
Route::apiResource('pensamentos', 'App\Http\Controllers\Api\PensamentoController');

Route::get('users', 'App\Http\Controllers\Api\UserController@index');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', 'App\Http\Controllers\Api\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\Api\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\Api\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\Api\AuthController@me');
});
