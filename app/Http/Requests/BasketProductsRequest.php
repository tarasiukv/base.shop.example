<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BasketProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'basket_products_code' => 'nullable',
            'status' => 'nullable',
            'quantity' => 'nullable',
            'user_id' => 'nullable',
            'product_id' => 'nullable',
        ];
    }
}
