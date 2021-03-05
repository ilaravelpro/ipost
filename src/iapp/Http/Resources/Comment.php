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
        if ($this->parent_id)
            $data['parent_id'] = [
                'title' => $this->parent->title,
                'value' => $this->parent->serial,
                'id' => $this->parent->serial,
            ];
        if ($this->creator_id)
            $data['creator_id'] = [
                'title' => $this->creator->fullname,
                'value' => $this->creator->serial,
                'id' => $this->creator->serial,
            ];
        request()->merge(['no_actions' => true]);
        $data['replays'] = self::collection($this->replays);
        if (isset($this->approved_at) && $this->approved_at)
            $data['approved_at'] = str_replace('-', '/', $this->approved_at);
        $typeModel = imodal('Type');
        $type = $typeModel::findByName($this->type);
        $data['type'] = $type? [
            'text' => $type->title,
            'value' => $type->name,
            'id' => $type->serial,
        ]: $this->type;
        unset($data['poll_entries']);
        return $data;
    }
}
