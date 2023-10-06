<?php

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\CategoryController;
use App\Http\Controllers\Api\v1\ProductsController;
use App\Http\Controllers\Api\v1\UsersController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UsersController::class);

/**
 * CATEGORY
 * */
Route::get('categories', [CategoryController::class, 'index']);
Route::get('categories/{category}', [CategoryController::class, 'show']);
Route::post('categories/search', [CategoryController::class, 'search']);
//with auth
Route::group(['middleware' => ['auth', 'App\Http\Middleware\CheckRole:admin']], function ($router) {
    Route::get('categories/create', [CategoryController::class, 'create']);
    Route::post('categories', [CategoryController::class, 'store']);
    Route::get('categories/{category}/edit', [CategoryController::class, 'edit']);
    Route::put('categories/{category}', [CategoryController::class, 'update']);
    Route::delete('categories/{category}', [CategoryController::class, 'destroy']);
});

/**
 * PRODUCT
 * */
Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{product}', [ProductsController::class, 'show']);
Route::post('products/search', [ProductsController::class, 'search']);
//with auth
Route::group(['middleware' => ['auth', 'App\Http\Middleware\CheckRole:admin']], function ($router) {
    Route::get('products/create', [ProductsController::class, 'create']);
    Route::post('products', [ProductsController::class, 'store']);
    Route::get('products/{product}/edit', [ProductsController::class, 'edit']);
    Route::post('products/{product}', [ProductsController::class, 'update']);
    Route::delete('products/{product}', [ProductsController::class, 'destroy']);
});


/** Auth route with JWT */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

