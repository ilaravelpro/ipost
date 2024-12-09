<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\Resource;
use iLaravel\Core\iApp\Http\Resources\ResourceData;

class Comment extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        if ($this->parent_id)
            $data['parent_id'] = [
                'text' => $this->parent->name,
                'value' => $this->parent->serial,
                'id' => $this->parent->serial,
            ];
        if ($this->creator_id)
            $data['creator_id'] = [
                'text' => $this->creator->fullname,
                'value' => $this->creator->serial,
                'id' => $this->creator->serial,
            ];
        request()->merge(['no_actions' => true]);
        $data['replays'] = self::collection($this->replays);
        /*if (isset($data['approved_at']) && $data['approved_at'])
            $data['approved_at'] = str_replace('-', '/', $data['approved_at'])*/;
        $typeModel = imodal('Type');
        $type = $typeModel::findByName($this->type);
        $data['item'] = $this->item_model ? new (iresourcedata($this->item_model_title)?:ResourceData::class)($this->item_model) : null;
        $data['type'] = $type? [
            'text' => $type->title,
            'value' => $type->name,
            'id' => $type->serial,
        ]: $this->type;
        unset($data['poll_entries']);
        return $data;
    }
}
