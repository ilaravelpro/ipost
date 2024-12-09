<?php

/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Traits;


trait SaveTags
{
    public function save_tags($data) {
        if (method_exists($this, 'tags') && _get_value($data, 'tags')) {
            $tag_model = imodal('Tag');
            $tags = remove_empty(array_map(function ($tag) use($tag_model){
                $tag = isset($term['value']) ? $tag['value'] : $tag;
                if (!($id = $tag_model::id($tag))){
                    $id = $tag_model::where('title', $tag)->first();
                    if (!$id){
                        $id = $tag_model::create([
                            'title' => $tag,
                            'slug' => to_slug(strtolower($tag))
                        ]);
                    }
                    $id = $id->id;
                }
                return $id;
            }, (array) _get_value($data, 'tags', [])));
            $this->tags()->detach();
            if (count($tags))
                $this->tags()->attach($tags);
        }
    }
}
