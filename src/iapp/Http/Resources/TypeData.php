<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\ResourceData;

class TypeData extends ResourceData
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['value'] = $this->name ? : strtolower($this->title);
        $data['id'] = $this->serial;
        $data['id'] = $this->serial;
        if ($this->parent_id){
            $data['parent_id'] = $this->parent->serial;
            if ($this->parent->parent_id)
                $data['grandpa_id'] = $this->parent->parent->serial;
        }
        return $data;
    }
}
