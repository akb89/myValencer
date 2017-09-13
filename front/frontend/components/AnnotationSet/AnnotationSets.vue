<template>
    <div>
      <!-- <div class="tabs is-boxed is-small">
        <ul>
          <li v-bind:class="{ 'is-active': state.display.ent }" @click="display_tab('ent')">
            <a>
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>ENT</span>
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
      </div> -->
      <div v-if="state.display.raw && $store.state.annoset.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-annoset
          v-if="state.display.raw && !$store.state.annoset.loading"
          v-for="item in $store.state.annoset.content"
          :key="item._id"
          :sentence="item.sentence"
          :labels="item.labels"
          :lex-unit="item.lexUnit"
          :pattern="item.pattern">
      </fn-annoset>
      <fn-annoset-ent
       v-if="state.display.ent && !$store.state.annoset.loading"
       v-for="item in $store.state.annoset.content"
       :key="item._id"
       :labels="item.labels"
       :text="item.sentence.text"
       :frame="item.lexUnit.frame"
       :pattern="item.pattern">
      </fn-annoset-ent>
    </div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
