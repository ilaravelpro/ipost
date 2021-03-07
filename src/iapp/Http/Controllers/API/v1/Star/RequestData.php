<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 6:07 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Star;

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
    }
}
