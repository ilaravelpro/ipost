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
        if ($this->parents && $this->parents->count() && !$this->no_parents)
        $data['parents'] = $this->parents->map(function ($parent) {
            return [
                'text' => $parent->title,
                'value' => $parent->serial,
                'id' => $parent->serial,
            ];
        });
        if ($this->kids && $this->kids->count())
            $data['kids'] = $this->kids->map(function ($kid) {
                $kid = new TermData($kid);
                $kid->no_parents = true;
                return $kid->toArray(request());
            });
        unset($data['creator_id']);
        unset($data['image_id']);
        return $data;
    }
}
