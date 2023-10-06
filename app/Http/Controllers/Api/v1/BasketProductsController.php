<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BasketProductsRequest;
use App\Http\Resources\BasketProductsResource;
use App\Models\BasketProducts;
use App\Models\BasketProducts;
use Symfony\Component\HttpFoundation\Response;

class BasketProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BasketProductsResource::collection(BasketProducts::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BasketProductsRequest $request)
    {
        return BasketProducts::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $basket_products = BasketProducts::findOrFail($id);

        return $basket_products;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BasketProductsRequest $request, BasketProducts $basket_products)
    {
        $basket_products->update($request->validated());

        return new BasketProductsResource($basket_products);
    }


    public function destroy(BasketProducts $basket_products)
    {
        $basket_products->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
