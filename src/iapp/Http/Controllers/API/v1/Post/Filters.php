<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 7/14/20, 9:38 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Post;

trait Filters
{
    public function filters($request, $model, $parent = null, $operators = [])
    {
        list($filters, $current_filter, $operators) = parent::filters(...func_get_args());
        $filters[] = [
            'name' => 'terms',
            'title' => _t('terms'),
            'rule' => 'required',
            'type' => 'text'
        ];
        return [$filters, $current_filter, $operators];
    }
}
