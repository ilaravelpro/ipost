<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/2/21, 8:25 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Traits;


trait Model
{
    use \iLaravel\iTranslate\iApp\Traits\Translate;
    use SaveTags;
    use SaveTerms;

    protected static function iPostBoot()
    {
        parent::creating(function (self $event) {
            if ($event->hasTableColumn('type') && isset(static::$post_type))
                $event->type = static::$post_type;
        });
        parent::deleting(function (self $event) {
            if (method_exists($event, 'tags'))
                $event->tags()->detach();
            if (method_exists($event, 'terms'))
                $event->terms()->detach();
            if (method_exists($event, 'translates'))
                foreach ($event->translates as $translate) $translate->delete();
        });
    }

    public function additionalUpdate($request = null, $additional = null, $parent = null)
    {
        $additional = $additional ?: $this->getAdditional();
        if (method_exists(parent::class, 'additionalUpdate'))
            parent::additionalUpdate($request, $additional, $parent);
        $this->save_terms($additional);
        $this->save_tags($additional);
        $this->save();
    }
}
