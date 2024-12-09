<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('creator_id')->nullable();
            $table->foreign('creator_id')->references('id')->on('users');
            $table->bigInteger('image_id')->nullable()->unsigned();
            $table->foreign('image_id')->references('id')->on('posts')->onDelete('cascade');
            $table->string('title');
            $table->string('slug')->nullable();
            $table->string('icon')->nullable();
            $table->string('type')->nullable();
            $table->string('template')->nullable();
            $table->text('description')->nullable();
            $table->longText('content')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terms');
    }
}
