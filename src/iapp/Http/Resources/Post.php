<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 7/21/20, 6:35 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Attachment;
use iLaravel\Core\iApp\Http\Resources\File;
use iLaravel\Core\iApp\Http\Resources\Resource;

class Post extends Resource
{
    public function toArray($request)
    {
        $data = parent::toArray($request);
        if ($this->creator_id)
            $data['creator_id'] = [
                'text' => $this->creator->fullname,
                'value' => $this->creator->serial,
            ];
        $data['terms'] = $this->terms->map(function ($parent) {
            return [
                'text' => $parent->title,
                'slug' => $parent->slug,
                'value' => $parent->serial
            ];
        });
        if ($translate = $this->translates?->where('local', $this->local)->first()){
            if ($translate->tags && count($translate->tags))
                $data['tags'] = $translate->tags->pluck('title')->toArray();
        }else {
            if ($this->tags && count($this->tags))
                $data['tags'] = $this->tags->pluck('title')->toArray();
        }
        if ($this->attachments->count()) {
            $fileModel = imodal('File');
            $data['attachments'] = [];
            foreach (['galleries'] as $item) {
                $galleries = $this->attachments()->wherePivot('type', $item)->get();
                if ($galleries->count()) {
                    foreach ($galleries as $index => $gallery) {
                        $data['attachments'][$item]['items'][$index] = File::collection($fileModel::where('post_id', $gallery->id)->get()->keyBy('mode'));
                    }
                }
            }
        }
        $fileModel = imodal('File');
        $postModel = imodal('Post');
        if (isset($data['content']) && is_array($data['content'])) {
            foreach ($postModel::reviewFiles($data['content'], '', false) as $item) {
                $cValue = _get_value($data['content'], "{$item}_id");
                if ($cValue) {
                    $data['content'] = _set_value($data['content'], "{$item}_id", is_int($cValue) ? Attachment::serial($cValue) : $cValue);
                    $data['content'] = _set_value($data['content'], $item, File::collection($fileModel::where('post_id', is_int($cValue) ? $cValue : Attachment::id($cValue))->get()->keyBy('mode')));
                }
            }
        }
        $postTranslateResource = iresource('PostTranslate');
        foreach ($this->translates?:[] as $translate) {
            $data['locals'][$translate->local] = new $postTranslateResource($translate);
        }
        $data['created_at_text'] = jdate($this->created_at)->format('Y/m/d');
        $data['updated_at_text'] = jdate($this->updated_at)->format('Y/m/d');
        return $data;
    }

}
