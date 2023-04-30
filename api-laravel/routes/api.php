<?php
use Illuminate\Support\Facades\Route;

Route::apiResource('clientes', 'App\Http\Controllers\Api\ClienteController');
Route::apiResource('products', 'App\Http\Controllers\Api\ProductController');
Route::apiResource('pensamentos', 'App\Http\Controllers\Api\PensamentoController');

Route::get('users', 'App\Http\Controllers\Api\\UserController@index');
