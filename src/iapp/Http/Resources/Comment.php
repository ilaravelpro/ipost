<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\Resource;

class Comment extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['parent'] = [
            'title' => $this->parent->title,
            'value' => $this->parent->serial,
        ];
        unset($data['poll_entries']);
        unset($data['parent_id']);
        unset($data['creator_id']);
        return $data;
    }
}
