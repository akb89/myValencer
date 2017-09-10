<template>
    <div>
      <div class="tabs is-boxed is-small">
        <ul>
          <li v-bind:class="{ 'is-active': state.display.ner }" @click="display_tab('ner')">
            <a>
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>NER</span>
            </a>
          </li>
          <li v-bind:class="{ 'is-active': state.display.raw }" @click="display_tab('raw')">
            <a>
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>RAW</span>
            </a>
          </li>
          <li v-bind:class="{ 'is-active': state.display.dep }" @click="display_tab('dep')">
            <a>
              <span class="icon is-small"><i class="fa fa-film"></i></span>
              <span>DEP</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="$store.state.annoset.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-annoset
          v-if="state.display.raw"
          v-for="item in $store.state.annoset.content"
          :key="item._id"
          :sentence="item.sentence"
          :labels="item.labels"
          :lex-unit="item.lexUnit"
          :pattern="item.pattern">
      </fn-annoset>
    </div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
