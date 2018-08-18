<template>
<div>
    <div class="columns">
        <div class="column is-9">
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
          <div class="column is-9">
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
          <div class="column is-3">
            <collapsible
                v-if="$store.state.fehierarchy.content && $store.state.fehierarchy.content.length > 0"
                :number-of-items="Object.keys($store.state.fehierarchy.content[0]).length"
                :open-by-default="true"
                class="fe-hierarchy"
            >
            <template v-for="(item, _, idx) in $store.state.fehierarchy.content[0]">

                    <template :slot="`title-${idx}`">
                        <div
                            :fe-hierarchy-header="$store.state.feColorMap[item.name]"
                            class="accordion-header"
                        > 
                            {{item.name}}
                            <!--<span class="is-pulled-right">
                                <i class="fa fa-caret-down" v-if="open"></i>
                                <i class="fa fa-caret-up" v-else></i>
                            </span>-->
                        </div>
                    </template>
                    <div class="accordion-content" :fe-hierarchy-content="$store.state.feColorMap[item.name]" :slot="`body-${idx}`">
                        <pre>{{display_fehierarchy_tree(item)}}</pre>
                    </div>
                </template>
            </collapsible>
          </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-9">
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
