<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\Resource;

class Term extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['parents'] = $this->parents->map(function ($parent) {
            return [
                'text' => $parent->title,
                'value' => $parent->serial,
                'id' => $parent->serial,
            ];
        });
        $data['text'] = $this->title;
        $data['kids'] = TermData::collection($this->kids);
        $typeModel = imodal('Type');
        $typeResource = iresourcedata('Type');
        $data['type'] = ($type = $typeModel::findByName($this->type)) ? new $typeResource($type): $this->type;
        unset($data['creator_id']);
        unset($data['image_id']);
        return $data;
    }
}
