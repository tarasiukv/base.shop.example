<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'price',
        'file_path',
        'category_id',
        'country',
        'manufacturer',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function scopeSearch($query, $search_text)
    {
        return $query->where(function ($query) use ($search_text) {
        $query->whereRaw("LOWER(title) like '%" . mb_strtolower($search_text) . "%'")
            ->orWhereRaw("LOWER(description) like '%" . mb_strtolower($search_text) . "%'")
            ->orWhereRaw("LOWER(manufacturer) like '%" . mb_strtolower($search_text) . "%'");
        });
    }

    public function scopeFilterByPrice($query, $min_price, $max_price)
    {
        if (!empty($min_price)) {
            $query->where('price', '>=', $min_price);
        }

        if (!empty($max_price)) {
            $query->where('price', '<=', $max_price);
        }

        return $query;
    }

    public function scopeFilterByCategory($query, $category_id)
    {
        if (!empty($category_id)) {
            $query->where('category_id', $category_id);
        }

        return $query;
    }
}
