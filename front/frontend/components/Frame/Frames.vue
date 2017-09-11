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
      <div v-if="state.display.raw && $store.state.frame.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="state.display.cluster && $store.state.cytoframe.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-frame
          v-if="state.display.raw && !$store.state.frame.loading"
          v-for="item in $store.state.frame.content"
          :key="item._id"
          :name="item.name"
          :sem-types="item.semTypes"
          :frame-elements="item.frameElements">
      </fn-frame>
      <fn-frame-cluster
        v-if="state.display.cluster && !$store.state.cytoframe.loading">
      </fn-frame-cluster>
    </div>
</template>

<script>
module.exports = require('./Frames');
</script>
