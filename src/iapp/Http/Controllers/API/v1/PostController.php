<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/23/21, 4:24 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class PostController extends \iLaravel\Core\iApp\Http\Controllers\API\v1\PostController
{
    use Post\Filters,
        Post\QueryFilterType,
        Post\RequestData;


    public function except(Request $request, $action)
    {
        switch ($action) {
            case 'locals_save':
                return ['tags', 'terms', 'attachments', 'post_id', 'image_id', 'creator_id'];
        }
        return [];
    }

}
