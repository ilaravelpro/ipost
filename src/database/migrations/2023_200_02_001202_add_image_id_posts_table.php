<?php
/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 1/18/21, 1:20 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddImageIdPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->bigInteger('image_id')->nullable()->unsigned()->after('parent_id');
            $table->foreign('image_id')->references('id')->on('posts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function ($table) {
            $table->dropColumn('color');
        });
    }
}
