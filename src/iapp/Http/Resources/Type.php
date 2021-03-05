<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\Resource;

class Type extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        if ($this->parent_id){
            $data['parent_id'] = [
                'text' => $this->parent->title,
                'value' => $this->parent->name,
                'id' => $this->parent->serial,
            ];
            if ($this->parent->parent_id){
                $data['grandpa_id'] = [
                    'text' => $this->parent->parent->title,
                    'value' => $this->parent->parent->name,
                    'id' => $this->parent->parent->serial,
                ];
            }
        }
        unset($data['creator_id']);
        return $data;
    }
}
