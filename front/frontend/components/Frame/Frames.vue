<template>
<div>
    <div class="columns">
        <div class="column is-12">
            <paginator
            :items-per-page="limit"
            :number-of-items="total"
            :skip="skip"
            @page-change="on_page_change"
            />
        </div>
    </div>
    <div v-if="$store.state.frame.loading" class="columns is-centered">
        <loader></loader>
    </div>
    <article v-if="!$store.state.frame.loading && has_request_frame_error" class="message is-danger">
        <div class="message-body has-text-centered">
            <span>An error occurred: </span>
            <span v-html="request_error_message('frame')" />
        </div>
    </article>
    <fn-frame
        v-else-if="!$store.state.frame.loading"
        v-for="item in $store.state.frame.content"
        :key="item._id"
        :name="item.name"
        :sem-types="item.semTypes"
        :frame-elements="item.frameElements"
        :lexUnits="item.lexUnits"
        :definition="item.definition">
    </fn-frame>
    <div class="columns">
        <div class="column is-12">
            <paginator
            :items-per-page="limit"
            :number-of-items="total"
            :skip="skip"
            @page-change="on_page_change"
            />
        </div>
    </div>
</div>
</template>

<script>
module.exports = require('./Frames');
</script>
