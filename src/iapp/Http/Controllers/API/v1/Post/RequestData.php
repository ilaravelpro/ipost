<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/2/21, 8:00 AM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Post;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

trait RequestData
{
    public function requestData(Request $request, $action, &$data)
    {
        if (in_array($action, ['store', 'update'])) {
            if (isset($data['content']) && is_array($data['content'])) {
                foreach ($data['content'] as $index => $datum) {
                    $data['content'][$index] = array_map(function ($item) {
                        return is_string($item) ? (in_array($item, ['true', 'false']) ? $item == "true" : $item) : $item;
                    }, $datum);
                }
            }
        }
    }
}
