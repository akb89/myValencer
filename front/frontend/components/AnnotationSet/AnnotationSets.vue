<template>
<div>
    <div class="columns">
        <div class="column is-12">
            <paginator
            display="ANNOSET"
            :items-per-page="$store.state.queries.items"
            :number-of-items="$store.state.annoset.total"
            :skip="$store.state.annoset.skip">
          </paginator>
        </div>
    </div>
    <div v-if="$store.state.annoset.loading" class="columns is-centered">
        <loader></loader>
    </div>
    <div v-if="!$store.state.annoset.loading">
        <fn-annoset
        v-if="$store.state.display.subtype === 'ENT' && !$store.state.annoset.loading"
        v-for="item in $store.state.annoset.content"
        :key="item._id"
        :labels="item.labels"
        :text="item.sentence.text"
        :frame="item.lexUnit.frame"
        :pattern="item.pattern">
        </fn-annoset>
    </div>
    <div class="columns">
        <div class="column is-12">
            <paginator
            display="ANNOSET"
            :items-per-page="$store.state.queries.items"
            :number-of-items="$store.state.annoset.total"
            :skip="$store.state.annoset.skip">
          </paginator>
        </div>
    </div>
</div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
