<template>
    <div>
      <div v-if="$store.state.annoset.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="!$store.state.annoset.loading && state.content.length > 0">
          <fn-annoset
          v-if="state.display.raw && !$store.state.annoset.loading"
          v-for="item in state.content"
          :key="item._id"
          :sentence="item.sentence"
          :labels="item.labels"
          :lex-unit="item.lexUnit"
          :pattern="item.pattern">
          </fn-annoset>
          <fn-annoset-ent
          v-if="state.display.ent && !$store.state.annoset.loading"
          v-for="item in state.content"
          :key="item._id"
          :labels="item.labels"
          :text="item.sentence.text"
          :frame="item.lexUnit.frame"
          :pattern="item.pattern">
          </fn-annoset-ent>
          <infinite-loading
          v-if="$store.state.annoset.content.length > state.infiniteSlice"
          :on-infinite="infiniteLoadMore" 
          ref="infiniteLoading"></infinite-loading>
      </div>
    </div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
