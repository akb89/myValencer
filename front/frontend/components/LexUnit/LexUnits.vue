<template>
<div>
    <div class="columns">
        <div class="column is-12">
            <paginator 
            display="LEXUNIT" 
            :items-per-page=this.$store.state.queries.items
            :number-of-items=this.$store.state.lexunit.total
            :skip=this.$store.state.lexunit.skip
            />
        </div>
    </div>
      <div v-if="$store.state.lexunit.loading" class="columns is-centered">
          <loader></loader>
      </div>
      <div v-if="!$store.state.lexunit.loading">
          <fn-lexunit
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
    <div class="columns">
        <div class="column is-12">
            <paginator 
            display="LEXUNIT" 
            :items-per-page=this.$store.state.queries.items
            :number-of-items=this.$store.state.lexunit.total
            :skip=this.$store.state.lexunit.skip
            />
        </div>
    </div>
</div>
</template>

<script>
module.exports = require('./LexUnits');
</script>
