<template>
    <div>
      <div v-if="$store.state.lexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="!$store.state.lexunit.loading">
          <fn-lexunit
          v-for="item in state.content"
          :key="item._id"
          :id="item._id"
          :name="item.name"
          :pos="item.pos"
          :definition="item.definition"
          :sem-types="item.semTypes"
          :frame="item.frame">
          </fn-lexunit>
      </div>
    </div>
</template>

<script>
module.exports = require('./LexUnits');
</script>
