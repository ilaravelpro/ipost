<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/1/20, 7:24 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1;

use iLaravel\Core\iApp\Http\Controllers\API\Controller;
use iLaravel\Core\iApp\Http\Controllers\API\Methods\Controller\Index;
use iLaravel\Core\iApp\Http\Controllers\API\Methods\Controller\Show;
use iLaravel\Core\iApp\Http\Controllers\API\Methods\Controller\Store;
use iLaravel\Core\iApp\Http\Controllers\API\Methods\Controller\Update;
use iLaravel\Core\iApp\Http\Controllers\API\Methods\Controller\Destroy;

class CommentController extends Controller
{
    public $order_list = ['id', 'title','slug','description','status',];

    use Index,
        Show,
        Store,
        Update,
        Destroy,
        Comment\Filters,
        \iLaravel\Core\iApp\Http\Controllers\API\v1\Post\QueryFilterType,
        \iLaravel\Core\iApp\Http\Controllers\API\v1\Post\RequestFilter,
        \iLaravel\Core\iApp\Http\Controllers\API\v1\Post\RequestData;
}
