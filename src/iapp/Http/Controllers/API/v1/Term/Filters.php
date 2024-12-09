<?php



/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/1/20, 7:24 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;


trait Filters
{
    public function filters($request, $model, $parent = null, $operators = [])
    {
        $filters = [
            [
                'name' => 'all',
                'title' => _t('all'),
                'type' => 'text',
            ],
            [
                'name' => 'title',
                'title' => _t('title'),
                'type' => 'text',
            ],
            [
                'name' => 'slug',
                'title' => _t('slug'),
                'type' => 'text',
            ],
            [
                'name' => 'type',
                'title' => _t('type'),
                'type' => 'text',
            ],
            [
                'name' => 'description',
                'title' => _t('description'),
                'type' => 'text',
            ],
            [
                'name' => 'parents',
                'title' => _t('parents'),
                'type' => 'hidden',
            ],
            [
                'name' => 'parent_id',
                'title' => _t('parent'),
                'type' => 'hidden',
            ],
        ];
        $model->with('kids');
        return [$filters, [], $operators];
    }
}
