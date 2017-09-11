<template>
    <div>
      <div class="tabs is-toggle is-centered is-small">
        <ul>
          <li v-bind:class="{ 'is-active': state.display.raw }" @click="display_tab('raw')">
            <a>
              <span class="icon is-small"><i class="fa fa-bars"></i></span>
              <span>LIST</span>
            </a>
          </li>
          <li v-bind:class="{ 'is-active': state.display.cluster }" @click="display_tab('cluster')">
            <a>
              <span class="icon is-small"><i class="fa fa-dot-circle-o"></i></span>
              <span>CLUSTER</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="state.display.raw && $store.state.lexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="state.display.cluster && $store.state.cytolexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-lexunit
          v-if="state.display.raw && !$store.state.lexunit.loading"
          v-for="item in $store.state.lexunit.content"
          :key="item._id"
          :id="item._id"
          :name="item.name"
          :pos="item.pos"
          :definition="item.definition"
          :sem-types="item.semTypes"
          :frame="item.frame">
      </fn-lexunit>
      <fn-lexunit-cluster
        v-if="state.display.cluster && !$store.state.cytolexunit.loading">
      </fn-lexunit-cluster>
    </div>
</template>

<script>
module.exports = require('./LexUnits');
</script>
