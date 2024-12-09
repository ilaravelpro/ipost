<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PivotPostsAttachments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts_attachments', function (Blueprint $table) {
            $table->integer('post_id')->unsigned();
            $table->integer('attachment_id')->unsigned();
            $table->string('type')->nullable();
            $table->primary(['post_id' , 'attachment_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts_attachments');
    }
}
