<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 1/13/21, 12:21 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

trait Except
{
    public function except(Request $request, $action, $arg1 = null)
    {
        switch ($action) {
            case 'store':
            case 'update':
                return ['locals'];
        }
        return [];
    }
}
