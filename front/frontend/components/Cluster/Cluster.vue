<template>
  <div v-if="$store.state.cytoframe.loading" class="columns is-centered">
      <loader></loader>
  </div>
  <div v-else-if="has_request_cytoframe_error" class="columns is-centered">
      <div class="column is-12">
        <article v-if="has_request_cytoframe_error" class="message is-danger">
            <div class="message-body has-text-centered">
                <span>An error occurred: </span>
                <span v-html="request_error_message('cytoframe')" />
            </div>
        </article>
        </div>
  </div>
  <div v-else class="columns is-centered">
      <div id="cy" :style="{height: state.height + 'px'}"></div>
  </div>
</template>

<script>
module.exports = require('./Cluster');
</script>
