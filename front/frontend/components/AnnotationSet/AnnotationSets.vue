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
        <div class="columns is-centered">
          <div class="column is-10">
            <fn-annoset
            v-if="!$store.state.annoset.loading"
            v-for="item in $store.state.annoset.content"
            :key="item._id"
            :labels="item.labels"
            :text="item.sentence.text"
            :frame="item.lexUnit.frame"
            :pattern="item.pattern">
            </fn-annoset>
          </div>
          <div class="column is-2">
            <collapsible
                v-if="$store.state.fehierarchy.content && $store.state.fehierarchy.content.length > 0"
                :number-of-items="Object.keys($store.state.fehierarchy.content[0]).length"
                :open-by-default="true"
            >
              <template v-for="(item, _, idx) in $store.state.fehierarchy.content[0]">
              <div :slot="`title-${idx}`"
                :label-format="$store.state.feColorMap[item.name]"
              >
                {{item.name}}
              </div>
              <pre :slot="`body-${idx}`">{{display_fehierarchy_tree(item)}}</pre>

            </template>
            </collapsible>
          </div>
        </div>
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
