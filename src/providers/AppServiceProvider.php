<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/13/20, 6:07 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

namespace iLaravel\iPost\Providers;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if($this->app->runningInConsole())
        {
            if (ipost('database.migrations.include', true)) $this->loadMigrationsFrom(ipost_path('database/migrations'));
        }
    }

    public function register()
    {
        parent::register();
        $this->mergeConfigFrom(ipost_path('config/ipost.php'), 'ilaravel.ipost');
    }
}
