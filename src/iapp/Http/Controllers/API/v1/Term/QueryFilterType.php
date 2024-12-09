<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 5:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;

trait QueryFilterType
{
    public function query_filter_type($model, $filter, $params, $current)
    {
        switch ($params->type) {
            case 'parents':
            case 'parent':
                $parents = array_map(function ($parent) {
                    return $this->model::id($parent) ? : $this->model::slug($parent);
                }, is_array($filter->value) ? $filter->value : [$filter->value]);
                if (count($parents)){
                    $model->whereHas('parents', function ($query) use ($parents) {
                        $query->whereIn('terms_kids.term_id', $parents);
                    });
                    $current[$params->type] = $filter->value;
                }
                break;
        }
        return $current;
    }
}
