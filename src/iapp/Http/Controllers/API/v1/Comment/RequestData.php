<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 6:07 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Comment;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;
use iLaravel\Core\Vendor\iRole\iRole;


trait RequestData
{
    public function requestData(Request $request, $action, &$data)
    {
        if (in_array($action, ['store', 'update'])) {
            $data['type'] = is_array(@$data['type']) && isset($data['type']['value']) ? $data['type']['value'] : @$data['type'];
            $data['item'] = is_array(@$data['item']) && isset($data['item']['value']) ? $data['item']['value'] : @$data['item'];
            $data['like'] = is_string(@$data['like']) ? @$data['like'] == 'true' : @$data['like'];
        }
        if (in_array($action, ['store'])) {
            if (isset($data['creator_id']) && iRole::has('comments.edit.any')) {
                $data['creator_id'] = is_array($data['creator_id']) && isset($data['creator_id']['value']) ? $data['creator_id']['value'] : $data['creator_id'];
                $userModel = imodal('User');
                $data['creator_id'] = is_int($data['creator_id']) ? $data['creator_id'] :$userModel::id($data['creator_id']);
            }elseif (!@$data['creator_id'])
                $data['creator_id'] = auth()->id();

        }

        if (in_array($action, ['store']) && !isset($data['name'])) {
            $data['name'] = auth()->user()->fullname;
        }
        if (in_array($action, ['store', 'update']) && isset($data['replays']) && is_array($data['replays']) && count($data['replays'])) {
            $userModel = imodal('User');
            foreach ($data['replays'] as $index => $replay) {
                if (isset($replay['creator_id'])) {
                    $replay['creator_id'] = is_array($replay['creator_id']) && isset($replay['creator_id']['value']) ? $replay['creator_id']['value'] : $replay['creator_id'];
                    $data['replays'][$index]['creator_id'] = is_int($replay['creator_id']) ? $replay['creator_id'] :$userModel::id($replay['creator_id']);
                }
                if (isset($replay['approved_at']) && iRole::has('comments.edit.any')) {
                    $data['replays'][$index]['approved_at'] = str_replace('/', '-', $replay['approved_at']);
                }
            }
            $request->merge(['replays' => $data['replays']]);
            request()->merge(['replays' => $data['replays']]);
        }
        if (in_array($action, ['store', 'update']) && isset($data['parent_id'])) {
            $data['parent_id'] = is_array($data['parent_id']) && isset($data['parent_id']['value']) ? $data['parent_id']['value'] : $data['parent_id'];
            $data['parent_id'] = $this->model::id($data['parent_id']);
            unset($data['parent']);
        }
        if (in_array($action, ['store', 'update']) && iRole::has('comments.edit.any') && isset($data['approved_at'])) {
            $data['approved_at'] = str_replace('/', '-', $data['approved_at']);
        }
       // dd($data);
    }
}
