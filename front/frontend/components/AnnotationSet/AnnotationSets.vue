<template>
<div>
    <div class="columns">
        <div :class="['column', {'is-9': has_fe_hierarchy, 'is-12': !has_fe_hierarchy}]">
            <paginator
            :items-per-page="limit"
            :number-of-items="total"
            :skip="skip"
            @page-change="on_page_change"
            />
        </div>
    </div>
    <div v-if="$store.state.annoset.loading" class="columns is-centered">
        <loader></loader>
    </div>
    <div v-if="!$store.state.annoset.loading">
        <div class="columns is-centered">
        <div :class="['column', {'is-9': has_fe_hierarchy, 'is-12': !has_fe_hierarchy}]">
            <article v-if="has_request_annoset_error" class="message is-danger">
                <div class="message-body has-text-centered">
                    <span>An error occurred: </span>
                    <span v-html="request_error_message('annoset')" />
                    <br />
                    <div v-if="is_4xx_code('annoset')" v-html="error_4xx_msg" />
                </div>
            </article>
            <fn-annoset
            v-else 
            v-for="item in $store.state.annoset.content"
            :key="item._id"
            :labels="item.labels"
            :text="item.sentence.text"
            :frame="item.lexUnit.frame"
            :pattern="item.pattern">
            </fn-annoset>
          </div>
          <div class="column is-3"
            v-if="has_fe_hierarchy"
          >
                <section class="accordions fe-hierarchy">
                    <collapsible
                        v-for="(item, _, idx) in $store.state.fehierarchy.content[0]"
                        :open="hierarchy(idx)"
                        v-on:collapsible-toggle="(val) => change_hierarchy_tab(idx, val)"
                        :key="idx"
                    >
                        <div
                            :fe-hierarchy-header="$store.state.feColorMap[item.name]"
                            class="accordion-header is-pointer"
                            slot="title"
                        > 
                            {{item.name}}
                            <span class="is-pulled-right">
                                <i class="fa fa-caret-down" v-if="hierarchy(idx)"></i>
                                <i class="fa fa-caret-up" v-else></i>
                            </span>
                        </div>
                        <div class="accordion-content" 
                            :fe-hierarchy-content="$store.state.feColorMap[item.name]" 
                            slot="body"
                        >
                            <pre>{{display_fehierarchy_tree(item)}}</pre>
                        </div>
                    </collapsible>
                </section>
          </div>
        </div>
    </div>
    <div class="columns">
        <div :class="['column', {'is-9': has_fe_hierarchy, 'is-12': !has_fe_hierarchy}]">
            <paginator
            :items-per-page="limit"
            :number-of-items="total"
            :skip="skip"
            @page-change="on_page_change"
            />
        </div>
    </div>
</div>
</template>

<script>
module.exports = require('./AnnotationSets');
</script>
