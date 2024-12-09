<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class CommentStarTitle extends \iLaravel\Core\iApp\Model
{
    public static $s_prefix = "IPCST";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function comments()
    {
        return $this->hasMany(imodal('Comment'), 'star_title_id', 'comment_id');
    }

    public function stars()
    {
        return $this->hasMany(imodal('CommentStar'), 'title_id');
    }
    public function rules(Request $request, $action, $arg1 = null)
    {
        $arg1 = is_string($arg1) ? $this::findBySerial($arg1) : $arg1;
        $rules = [];
        $additionalRules = [];
        switch ($action) {
            case 'store':
            case 'update':
                $rules = array_merge($rules, [
                    'title' => "required|string",
                    'status' => 'nullable|in:' . join(',', iconfig('status.comment_star_titles', iconfig('status.global'))),
                ], $additionalRules);
                break;
            case 'additional':
                $rules = $additionalRules;
                break;
        }
        return $rules;
    }
}
