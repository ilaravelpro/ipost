<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/2/21, 8:25 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;


class Model extends \iLaravel\Core\iApp\Model
{
    use Traits\Model;

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::iPostBoot();
    }
}
