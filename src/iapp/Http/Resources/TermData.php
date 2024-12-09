<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\ResourceData;

class TermData extends ResourceData
{
    public $no_parents = false;

    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['text'] = $request->has('parent') && $request->parent == 0 && $this->parent ? implode('->', [$this->parent->text_title, $data['text']]) : $data['text'];
        $data['slug'] = $this->slug;
        if ($this->kids && $this->kids->count()) $data['kids'] = static::collection($this->kids);
        unset($data['creator_id']);
        unset($data['image_id']);
        return $data;
    }
}
