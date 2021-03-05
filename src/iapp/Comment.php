<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class Comment extends \iLaravel\Core\iApp\Model
{
    protected $guarded = ['id'];

    public static $s_prefix = "IPC";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    protected $casts = [
        'approved_at' => 'timestamp',
        'data' => 'array'
    ];

    public function parent()
    {
        return $this->belongsTo(imodal('Comment'), 'parent_id');
    }

    public function kids()
    {
        return $this->hasMany(imodal('Comment'), 'parent_id');
    }

    public function poll_entries() {
        return $this->belongsToMany(imodal('PollEntry'), 'comments_poll_entries');
    }

    public function rules(Request $request, $action, $arg1 = null)
    {
        $arg1 = is_string($arg1) ? $this::findBySerial($arg1) : $arg1;
        $rules = [];
        switch ($action) {
            case 'store':
                $rules = ["creator_id" => "required|exists:users,id"];
            case 'update':
                $rules = array_merge($rules, [
                    'name' => "required|string",
                    'text' => "required|string",
                    'score' => "required|numeric|min:0|max:5",
                    'like' => "required|boolean",
                    'type' => 'required|exists:types,name',
                    'approved_at' => "nullable||date_format:Y-m-d H:i:s",
                    'status' => 'nullable|in:' . join(iconfig('status.comments', iconfig('status.global')), ','),
                ]);
                break;
        }
        return $rules;
    }
}
