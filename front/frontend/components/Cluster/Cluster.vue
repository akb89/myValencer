<template>
  <div v-if="$store.state.cytoframe.loading" class="columns is-centered">
      <loader></loader>
  </div>
  <div v-else class="columns is-centered">
      <div id="cy"></div>
  </div>
</template>

<script>
module.exports = require('./Cluster');
</script>
