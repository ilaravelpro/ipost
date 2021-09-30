<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp;

use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;
use Illuminate\Validation\Rule;

class Term extends \iLaravel\Core\iApp\Model
{
    protected $guarded = ['id'];

    public static $s_prefix = "IPT";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public $files = ['image'];

    protected static function boot()
    {
        parent::boot();
        static::saving(function (self $event) {
            $TermPolicy = ipolicy('TermPolicy');
            if ((new $TermPolicy())->update(auth()->user(), $event) || (new $TermPolicy())->create(auth()->user(), $event) ){
                $event->saveFiles($event->files, request());
            }
        });
        static::deleted(function (self $event) {
            $event->kids()->detach();
        });
    }

    public function getImageAttribute()
    {
        return $this->getFile('image');
    }

    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function parents()
    {
        return $this->belongsToMany(imodal('Term'), 'terms_kids', 'kid_id', 'term_id');
    }

    public function kids()
    {
        return $this->belongsToMany(imodal('Term'), 'terms_kids', 'term_id', 'kid_id');
    }

    public function rules(Request $request, $action, $arg1 = null)
    {
        $arg1 = is_string($arg1) ? $this::findBySerial($arg1) : $arg1;
        $rules = [];
        $additionalRules = [
            'image_file' => 'nullable|mimes:jpeg,jpg,png,gif|max:5120|dimensions:ratio=1',
            'parents.*' => "nullable|exists_serial:Term",
        ];
        switch ($action) {
            case 'store':
                $rules = ["creator_id" => "required|exists:users,id"];
            case 'update':
                $rules = array_merge($rules,$additionalRules, [
                    'title' => "required|string",
                    'slug' => ['required','slug'],
                    'type' => 'required|exists:types,name',
                    'description' => "nullable|string",
                    'icon' => "nullable|string",
                    'status' => 'nullable|in:' . join(',', iconfig('status.terms', iconfig('status.global'))),
                ]);
                $rules['slug'][] = Rule::unique('terms')->where(function ($query) use ($request, $arg1) {
                    if ($arg1)
                        $query->where('id', '!=', $arg1->id);
                    $query->where('slug', $request->slug? : $arg1->slug)->where('type', $request->type ? : $arg1->type);
                });
                break;
            case 'additional':
                $rules = $additionalRules;
                break;
        }
        return $rules;
    }

    public static function findBySlug($slug)
    {
        return static::where('slug', $slug)->first();
    }

    public static function slug($slug)
    {
        $item = static::findBySlug($slug);
        return $item ? $item->id : null;
    }
}
