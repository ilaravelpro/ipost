<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/17/20, 5:52 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

Route::namespace('v1')->prefix('v1')->group(function() {
    Route::group(['middleware' => ['authIf:api']], function () {
        if (ipost('routes.api.types.status')) Route::apiResource('types', 'TypeController', ['as' => 'api']);
        if (ipost('routes.api.terms.status')) Route::apiResource('terms', 'TermController', ['as' => 'api']);
        if (ipost('routes.api.tags.status')) Route::apiResource('tags', 'TagController', ['as' => 'api']);
        if (ipost('routes.api.comments.status')) Route::apiResource('comments', 'CommentController', ['as' => 'api']);
        if (ipost('routes.api.stars.status')) Route::apiResource('stars', 'StarController', ['as' => 'api']);
        //if (ipost('routes.api.starring.status')) Route::post('starring', 'StarController@starring', ['as' => 'api']);
        if (ipost('routes.api.likes.status')) Route::apiResource('likes', 'LikeController', ['as' => 'api']);
        //if (ipost('routes.api.liking.status')) Route::post('liking', 'LikeController@liking', ['as' => 'api']);
    });
});
Route::namespace('v1')->prefix('v1')->group(function () {

});
