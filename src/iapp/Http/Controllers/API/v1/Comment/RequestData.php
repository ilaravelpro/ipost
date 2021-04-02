<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 6:07 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Comment;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;


trait RequestData
{
    public function requestData(Request $request, $action, &$data)
    {
        if (in_array($action, ['store', 'update']) && isset($data['like'])) {
            $data['like'] = is_string($data['like']) ? $data['like'] == 'true' : $data['like'];
        }
        if (in_array($action, ['store', 'update']) && isset($data['type'])) {
            $data['type'] = is_array($data['type']) && isset($data['type']['value']) ? $data['type']['value'] : $data['type'];
        }
        if (in_array($action, ['store', 'update']) && isset($data['creator_id'])) {
            $data['creator_id'] = is_array($data['creator_id']) && isset($data['creator_id']['value']) ? $data['creator_id']['value'] : $data['creator_id'];
            $userModel = imodal('User');
            $data['creator_id'] = $userModel::id($data['creator_id']);
        }
        if (in_array($action, ['store']) && !isset($data['creator_id'])) {
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
                    $data['replays'][$index]['creator_id'] = $userModel::id($replay['creator_id']);
                }
                if (isset($replay['approved_at'])) {
                    $data['replays'][$index]['approved_at'] = str_replace('/', '-', $replay['approved_at']);
                    if (count(explode(':', $data['replays'][$index]['approved_at'])) < 3)
                        $data['replays'][$index]['approved_at'] .= ':00';
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
        if (in_array($action, ['store', 'update']) && isset($data['approved_at'])) {
            $data['approved_at'] = str_replace('/', '-', $data['approved_at']);
            if (count(explode(':', $data['approved_at'])) < 3)
                $data['approved_at'] .= ':00';
        }
    }
}
