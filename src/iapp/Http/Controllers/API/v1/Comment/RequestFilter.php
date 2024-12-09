<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 3/1/21, 12:13 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Comment;


use Illuminate\Http\Request;

trait RequestFilter
{
    public function requestFilter($request, $model, $parent, $current, $filters, $operators)
    {
        $filters[7]['rule'] = function ($filter) {
            (new Request((array) $filter))->validate([
                'value' =>  'required|exists_serial:Comment',
            ]);
            return $filter;
        };
        if (method_exists($this->model, 'getRuleItem'))
            $filters = $this->model::getRuleItem($request, $model, $parent, $current, $filters, $operators);
        list($filters, $current) = parent::requestFilter($request, $model, $parent, $current, $filters, $operators);
        $parentSet = $request->has('parent') ? (boolean) $request->parent : true;
        if ((!isset($current['parent']) || !$current['parent']) && $parentSet){
            $model->where(function ($q) {
                $q->where('parent_id', null)->orWhere('parent_id','<=', 0);
            });
        }
        return [$filters, $current];
    }

}
