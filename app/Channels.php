<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channels extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'link',
        'group_id'
    ];
}
