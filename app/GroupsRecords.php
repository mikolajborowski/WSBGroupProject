<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupsRecords extends Model
{
    protected $fillable = [
        'group_id',
        'channel_id',
    ];
}
