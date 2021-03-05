<?php



/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/1/20, 7:24 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Comment;


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
                'name' => 'name',
                'title' => _t('name'),
                'type' => 'text',
            ],
            [
                'name' => 'text',
                'title' => _t('text'),
                'type' => 'text',
            ],
            [
                'name' => 'score',
                'title' => _t('score'),
                'type' => 'text',
            ],
            [
                'name' => 'like',
                'title' => _t('like'),
                'type' => 'text',
            ],
            [
                'name' => 'type',
                'title' => _t('type'),
                'type' => 'text',
            ],
            [
                'name' => 'parent',
                'title' => _t('parent'),
                'type' => 'text',
            ],
            [
                'name' => 'approved_at',
                'title' => _t('approved datetime'),
                'type' => 'datetime',
            ],
        ];
        return [$filters, [], $operators];
    }
}
