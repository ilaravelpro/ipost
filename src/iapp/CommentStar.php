<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class CommentStar extends \iLaravel\Core\iApp\Model
{
    public static $s_prefix = "IPCS";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function comment()
    {
        return $this->belongsTo(imodal('Comment'), 'comment_id');
    }

    public function star_title()
    {
        return $this->belongsTo(imodal('CommentStarTitle'), 'title_id');
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
                    "comment_id" => "nullable|exists:comments,id",
                    "star_title_id" => "nullable|exists:comment_star_titles,id",
                    'star' => "nullable|numeric|min:0|max:5",
                ], $additionalRules);
                break;
            case 'additional':
                $rules = $additionalRules;
                break;
        }
        return $rules;
    }
}
