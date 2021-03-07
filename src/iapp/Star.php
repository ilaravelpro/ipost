<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class Star extends \iLaravel\Core\iApp\Model
{
    public $set_creator = false;

    public static $s_prefix = "IPS";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function rules(Request $request, $action, $arg1 = null)
    {
        $rules = [];
        switch ($action) {
            case 'store':
            case 'update':
                $rules = array_merge($rules, [
                    'creator_id' => "nullable|exists:users,id",
                    'star' => "required|numeric|min:1|max:5",
                    'type' => 'required|exists:types,name',
                ]);
                break;
        }
        return $rules;
    }
}
