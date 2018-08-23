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
      <div v-if="$store.state.lexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="!$store.state.lexunit.loading">
          <article v-if="has_request_lexunit_error" class="message is-danger">
              <div class="message-body has-text-centered">
                  <span>An error occurred: </span>
                  <span v-html="request_error_message('lexunit')" />
              </div>
          </article>
          <fn-lexunit
          v-else
          v-for="item in $store.state.lexunit.content"
          :key="item._id"
          :id="item._id"
          :name="item.name"
          :pos="item.pos"
          :definition="item.definition"
          :sem-types="item.semTypes"
          :frame="item.frame">
          </fn-lexunit>
      </div>
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
module.exports = require('./LexUnits');
</script>
