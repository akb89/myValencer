<template>
<div>
    <div class="columns">
        <div class="column is-12">
            <paginator 
            display="ANNOSET" 
            :items-per-page=this.$store.state.queries.items
            :number-of-items=this.$store.state.annoset.total
            :skip=this.$store.state.annoset.skip
            />
        </div>
    </div>
    <div v-if="$store.state.annoset.loading" class="columns is-centered">
        <loader></loader>
    </div>
    <div v-if="!$store.state.annoset.loading && state.content.length > 0">
        <fn-annoset
        v-if="$store.state.display.subtype === 'RAW' && !$store.state.annoset.loading"
        v-for="item in state.content"
        :key="item._id"
        :sentence="item.sentence"
        :labels="item.labels"
        :lex-unit="item.lexUnit"
        :pattern="item.pattern">
        </fn-annoset>
        <fn-annoset-ent
        v-if="$store.state.display.subtype === 'ENT' && !$store.state.annoset.loading"
        v-for="item in state.content"
        :key="item._id"
        :labels="item.labels"
        :text="item.sentence.text"
        :frame="item.lexUnit.frame"
        :pattern="item.pattern">
        </fn-annoset-ent>
    </div>
    <div class="columns">
        <div class="column is-12">
            <paginator 
            display="ANNOSET" 
            :items-per-page=this.$store.state.queries.items
            :number-of-items=this.$store.state.annoset.total 
            :skip=this.$store.state.annoset.skip
            />
        </div>
    </div>
</div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
