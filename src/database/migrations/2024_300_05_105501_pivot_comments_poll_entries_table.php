<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PivotCommentsPollEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::smartCreate('comments_poll_entries', function (Blueprint $table) {
            $table->integer('comment_id')->unsigned();
            $table->integer('poll_entry_id')->unsigned();
            $table->primary(['comment_id' , 'poll_entry_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments_poll_entries');
    }
}
