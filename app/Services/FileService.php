<?php
namespace App\Services;

use App\Models\Product;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileService
{
    public static function store(UploadedFile $file, Product $product): string
    {
        $file_name = $product->id . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('img', $file_name, 'public');

        return $path;
    }
}
