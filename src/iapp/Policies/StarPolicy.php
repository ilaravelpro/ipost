<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/2/21, 8:13 AM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Policies;

use iLaravel\Core\Vendor\iRole\iRolePolicy;

class StarPolicy extends iRolePolicy
{
    public $prefix = 'stars';
    public $model = 'Star';
}
