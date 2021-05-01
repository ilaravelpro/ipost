<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 3/1/21, 12:08 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Star;


trait QueryFilterType
{
    public function query_filter_type($model, $filter, $params, $current, $filters)
    {
        switch ($params->type) {
            case 'item':
                if (method_exists($this->model, 'getItemQueryFilter'))
                    $current = $this->model::getItemQueryFilter($model, $filter, $params, $current, $filters);
                else
                    $current['item'] = $filter->value;
                break;
        }
        return $current;
    }
}
