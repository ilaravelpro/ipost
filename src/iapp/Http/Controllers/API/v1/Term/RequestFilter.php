<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 6:23 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait RequestFilter
{
    public function requestFilter($request, $model, $parent, $current, $filters, $operators)
    {
        $filters[array_search('parents', array_keys($filters))]['rule'] = function ($filter) {
            $filter->value = is_array($filter->value) ? $filter->value : (is_json($filter->value) ? json_decode($filter->value): explode(',',$filter->value));
            foreach ($filter->value as $index => $parent)
                $filter->value[$index] = isset($parent['value']) ? $parent['value'] : $parent;
            (new Request((array) $filter))->validate([
                'value.*' => 'required|exists_serial:Term',
            ]);
            return $filter;
        };
        list($filters, $current)  = parent::requestFilter($request, $model, $parent, $current, $filters, $operators);
        $parentSet = $request->has('parent') ? (boolean) $request->parent : true;
        if ((!isset($current['parents']) || !$current['parents']) && $parentSet){
            $model->withCount([
                    'parents' => function (Builder $builder) use (&$query) {
                        $query = $builder;
                    },
                ])
                ->setBindings($query->getBindings(), 'where')
                ->whereRaw("({$query->toSql()}) = 0");
        }
        return [$filters, $current];
    }
}
