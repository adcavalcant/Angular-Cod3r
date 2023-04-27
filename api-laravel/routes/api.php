<?php
use Illuminate\Support\Facades\Route;

Route::apiResource('clientes', 'App\Http\Controllers\ClienteController');
Route::apiResource('products', 'App\Http\Controllers\ProductController');
Route::apiResource('pensamentos', 'App\Http\Controllers\PensamentoController');

Route::apiResource('series', 'App\Http\Controllers\SeriesController');
