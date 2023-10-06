<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BasketProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'basket_products_code' => $this->basket_products_code,
            'status' => $this->status,
            'quantity' => $this->quantity,
//            'user_id' => new UserResource($this->whenLoaded('answeredByUser')),
//            'product_id' => new ProductResource($this->whenLoaded('answeredByUser')),
            'created_at' => $this->created_at ? $this->created_at->format('d.m.Y, H:i') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('d.m.Y, H:i') : null,
        ];
    }
}
