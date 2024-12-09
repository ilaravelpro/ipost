<?php


namespace iLaravel\iPost\iApp\Http\Controllers\API\v1\Term;


trait AfterSave
{
    use \iLaravel\iTranslate\iApp\Http\Controllers\API\v1\Traits\SaveLocals;

    public function after_save($request, $model, $parent) {
        if (isset($request->parents) && count($request->parents)) {
            $model->parents()->detach();
            $model->parents()->attach(array_map(function($parent) use ($model){
                return $this->model::id($parent);
            }, $request->parents));
        }
        $this->save_locals($request, $model, null, ['term_id']);
    }
}
