<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/1/20, 7:24 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1;

use iLaravel\Core\iApp\Http\Controllers\API\ApiController;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class CommentController extends ApiController
{
    public $order_list = ['id', 'title','slug','description','star','like','status',];

    use Comment\Filters,
        Comment\QueryFilterType,
        Comment\RequestFilter,
        Comment\RequestData;


    public function _resultIndex($args, $time, $callback)
    {
        $result = parent::_resultIndex($args, $time, $callback);
        $additional = $result->additional;
        for ($i = 0; $i < 4; $i++) {
            $additional['meta']['statistics']['stars'][$i] = $result->resource->sum(function ($item) use($i) {
                return $item->stars->filter(function ($item) use($i) {
                    return $item->title_id == $i+1;
                })->sum('star');
            });
            $additional['meta']['statistics']['avg_stars'] = round(_avg($additional['meta']['statistics']['stars']));
        }
        $result->additional($additional);
        return $result;
    }

}
