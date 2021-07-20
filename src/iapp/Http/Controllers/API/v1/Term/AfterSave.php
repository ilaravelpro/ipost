<?php


namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;


trait AfterSave
{
    public function after_save($request, $model, $parent) {
        if (isset($request->parents) && count($request->parents)) {
            $model->parents()->detach();
            $model->parents()->attach(array_map(function($parent) use ($model){
                return $this->model::id($parent);
            }, $request->parents));
        }
    }
}
