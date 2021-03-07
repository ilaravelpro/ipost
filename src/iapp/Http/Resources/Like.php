<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\Resource;

class Like extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        if ($this->creator_id)
            $data['creator_id'] = [
                'title' => $this->creator->fullname,
                'value' => $this->creator->serial,
                'id' => $this->creator->serial,
            ];
        $typeModel = imodal('Type');
        $type = $typeModel::findByName($this->type);
        $data['type'] = $type? [
            'text' => $type->title,
            'value' => $type->name,
            'id' => $type->serial,
        ]: $this->type;
        return $data;
    }
}
