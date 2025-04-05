<?php

namespace iLaravel\iPost\iApp\Traits;

trait SetSlug
{
    protected static function iPostSlugBoot()
    {
        parent::creating(function (self $event) {
            if ($event->hasTableColumn('slug') && empty($event->slug)) {
                if (empty($event->slug)) {
                    $slug = to_slug($event->title);
                    $slugs = static::where('slug', 'like', "$slug%")->get();
                    $event->slug = $slug . ($slugs->count() ? ("-" . $slugs->count()) : '');
                }
            }
        });
        parent::updating(function (self $event) {
            if ($event->hasTableColumn('slug') && empty($event->slug)) {
                $slug = to_slug($event->title);
                $slugs = static::where('slug', 'like', "$slug%")->where('id', '!=', $event->id)->get();
                $event->slug = $slug . ($slugs->count() ? ("-" . $slugs->count()) : '');
            }
        });
    }
}