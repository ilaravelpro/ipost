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
    public static $find_names = ['slug', 'title'];

    public static $s_prefix = "IPT";
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public $files = ['image'];

    protected static function boot()
    {
        parent::boot();
        static::deleted(function (self $event) {
            $event->kids()->detach();
        });
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
            'image_file' => 'nullable|mimes:jpeg,jpg,png,gif|max:5120',
            'parents.*' => "nullable|exists_serial:Term",
        ];
        if (isset($request->locals) && count($request->locals) && $modal_translate = imodal('TermTranslate')) {
            foreach ($request->locals as $local => $local_data) {
                $local_item = $arg1 && $arg1->translates ? $arg1->translates->where('local', $local)->first() : null;
                $local_rules = $modal_translate::getRules((new Request())->merge(array_merge($local_data, ['local' => $local])), 'update', $local_item ? : null);
                foreach ($local_rules as $local_rule_name => $local_rule) {
                    if ($local_rule_name !== 'local')
                    $additionalRules["locals.$local.$local_rule_name"] = $local_rule;
                }
            }
        }
        //|dimensions:ratio=1
        switch ($action) {
            case 'store':
                $rules = ["creator_id" => "required|exists:users,id"];
            case 'update':
                $rules = array_merge($rules, [
                    'title' => "required|string",
                    'slug' => ["nullable","slug:en,fa,num", Rule::unique('terms')->where(function ($query) use ($request, $arg1) {
                        if ($arg1)
                            $query->where('id', '!=', $arg1->id);
                        $query->where('slug', $request->slug? : $arg1->slug)->where('type', $request->type ? : $arg1->type);
                    })],
                    'type' => 'required|exists:types,name',
                    'template' => "nullable|string|in:classic,custom",
                    'description' => "nullable|string",
                    'content' => "nullable",
                    'icon' => "nullable|string",
                    'status' => 'nullable|in:' . join(',', iconfig('status.terms', iconfig('status.global'))),
                ], $additionalRules);
                break;
            case 'additional':
                $rules = $additionalRules;
                break;
        }
        return $rules;
    }

    protected function getTextTitleAttribute()
    {
        return $this->parent ? implode('->', [$this->parent->text_title, $this->title]) : $this->title;
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
