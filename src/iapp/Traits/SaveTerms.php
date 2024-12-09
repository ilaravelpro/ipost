<?php

/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 12/20/20, 8:27 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\iApp\Traits;


trait SaveTerms
{
    public function save_terms($data) {
        if (method_exists($this, 'terms') && _get_value($data, 'terms')) {
            $TermModel = imodal('Term');
            $terms = remove_empty(array_map(function ($term) use($TermModel) {
                return $TermModel::id(isset($term['value']) ? $term['value'] : $term);
            }, (array) _get_value($data, 'terms', [])));
            $this->terms()->detach();
            if (count($terms))
                $this->terms()->attach($terms);
        }
    }
}
