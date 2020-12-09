<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
     
     public $timestamps = false;
     protected $fillable = [
          'name',
          'description',
          'price',
          'imgId',
     ];

     public function image(){
          return $this->hasOne('App\Models\Image','id');
    }
}
