<template>
    <div>
      <div v-if="$store.state.frame.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <fn-frame
          v-if="!$store.state.frame.loading"
          v-for="item in $store.state.frame.content"
          :key="item._id"
          :name="item.name"
          :sem-types="item.semTypes"
          :frame-elements="item.frameElements"
          :lexUnits="item.lexUnits"
          :definition="item.definition">
      </fn-frame>
    </div>
</template>

<script>
module.exports = require('./Frames');
</script>
