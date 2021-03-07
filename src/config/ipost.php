<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/16/20, 9:21 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

return [
    'routes' => [
        'api' => [
            'status' => true,
            'types' => ['status' => true],
            'tags' => ['status' => true],
            'terms' => ['status' => true],
            'comments' => ['status' => true],
            'stars' => ['status' => true],
            'likes' => ['status' => true],
        ]
    ],
    'database' => [
        'migrations' => [
            'include' => true,
            'types' => ['include' => true],
            'terms' => ['include' => true],
            'tags' => ['include' => true],
            'comments' => ['include' => true],
            'comments_poll_entries' => ['include' => true],
            'stars' => ['include' => true],
            'likes' => ['include' => true],
        ],
    ],
];
?>
