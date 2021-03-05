<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;
use Illuminate\Validation\Rule;

class Tag extends \iLaravel\Core\iApp\Model
{

    public static $s_prefix = "IPTA";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public function rules(Request $request, $action, $arg1 = null)
    {
        $arg1 = is_string($arg1) ? $this::findBySerial($arg1) : $arg1;
        $rules = [];
        switch ($action) {
            case 'store':
                $rules = ["creator_id" => "required|exists:users,id"];
            case 'update':
                $rules = array_merge($rules, [
                    'title' => "required|string",
                    'slug' => ['nullable','slug'],
                    'status' => 'nullable|in:' . join(iconfig('status.tags', iconfig('status.global')), ','),
                ]);
                $rules['slug'][] = Rule::unique('tags')->where(function ($query) use ($request, $arg1) {
                    if ($arg1)
                        $query->where('id', '!=', $arg1->id);
                    $query->where('slug', $request->slug? : $arg1->slug);
                });
                break;
        }
        return $rules;
    }
}
