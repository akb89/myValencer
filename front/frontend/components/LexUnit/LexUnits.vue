<template>
    <div>
      <div class="tabs is-boxed is-small">
        <ul>
          <li v-bind:class="{ 'is-active': state.display.raw }" @click="display_tab('raw')">
            <a>
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>RAW</span>
            </a>
          </li>
          <li v-bind:class="{ 'is-active': state.display.cluster }" @click="display_tab('cluster')">
            <a>
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>CLUSTER</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="$store.state.lexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-lexunit
          v-if="state.display.raw"
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
</template>

<script>
module.exports = require('./LexUnits');
</script>
