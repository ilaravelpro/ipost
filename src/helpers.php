<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/13/20, 8:07 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

function ipost_path($path = null)
{
    $path = trim($path, '/');
    return __DIR__ . ($path ? "/$path" : '');
}

function ipost($key = null, $default = null)
{
    return iconfig('ipost' . ($key ? ".$key" : ''), $default);
}


function itype($key = null, $default = null)
{
    return app('ilaravel_types')->where('name', $key)->first()?:$key;
}
