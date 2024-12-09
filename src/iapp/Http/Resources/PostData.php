<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/15/20, 1:10 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Http\Resources;

use iLaravel\Core\iApp\Http\Resources\ResourceData;

class PostData extends ResourceData
{

    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['slug'] = $this->slug?:$this->serial;
        return $data;
    }
}
