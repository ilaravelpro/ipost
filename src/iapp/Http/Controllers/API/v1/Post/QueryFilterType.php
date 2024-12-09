<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/4/21, 8:42 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Post;


trait QueryFilterType
{
    public function query_filter_type($model, $filter, $params, $current)
    {
        switch ($params->type){
            case 'terms':
                $termModel = imodal('Term');
                $model->whereHas('terms', function ($query) use ($params, $termModel) {
                    $terms = is_array($params->value) ? $params->value : explode(',', $params->value);
                    $query->whereIn('terms.id', array_map(function ($serial) use($termModel) {return $termModel::id($serial); }, $terms))
                        ->orWhereIn('slug', $terms)
                        ->orWhereIn('title', $terms);
                    return $query;
                });
                $current['terms'] = $filter->value;
                break;
        }
        return $current;
    }
}
