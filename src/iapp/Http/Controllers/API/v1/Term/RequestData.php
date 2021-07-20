<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/21/21, 6:07 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;


trait RequestData
{
    public function requestData(Request $request, $action, &$data)
    {
        if (in_array($action, ['store']))
            $data['creator_id'] = auth()->id();
        if (in_array($action, ['store', 'update'])) {
            if (isset($data['parents']) && is_array($data['parents'])) {
                foreach ($data['parents'] as $index => $parent)
                    $data['parents'][$index] = is_array($parent) && isset($parent['value']) ? $parent['value'] : $parent;
            }
            if (isset($data['type'])) {
                $data['type'] = is_array($data['type']) && isset($data['type']['value']) ? $data['type']['value'] : $data['type'];
            }
            if (isset($data['title']) && (!isset($data['slug']) || (isset($data['slug']) && !strlen($data['slug'])))) {
                $data['slug'] = to_slug($data['title']);
            }
        }
    }
}
