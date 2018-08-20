<template>
  <div classclass="container is-fluid">
    <div class="columns is-centered is-multiline is-mobile">
        <div class="column is-10">
          <section class="hero is-primary is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">{{name}}</h1>
                <h2 class="subtitle">
                    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                        <loader 
                            color="white" background-color="turquoise" 
                            size="small" 
                            v-if="$store.state.framehierarchy.loading && $store.state.framehierarchy.loading[name]"
                        />
                        <ul v-else-if="collapsed_path.length > 1">
                            <li 
                                v-for="(item, idx) in collapsed_path.reverse()"
                                class="is-active"
                            >
                                <a href='#' aria-current="page" v-if="idx === collapsed_path.length-1">{{item}}</a>
                                <a href='#' v-else>{{item}}</a>
                            </li>
                        </ul>
                    </nav>
                </h2>
              </div>
            </div>
          </section>
          <div class="tile is-parent">
            <article class="tile is-child">
              <h1 class="title is-6 low-margin-bottom">Definition</h1>
              <div class="content is-small fnlabels" v-html="format_definition(definition)"></div>
            </article>
          </div>
            <div class="tile is-vertical is-12">
              <div class="tile">
                  <!--<div class="tile is-parent is-vertical is-4">-->
                  <div class="tile is-parent is-vertical is-12">
                  <article class="tile is-child">
                    <h1 class="title is-6 low-margin-bottom">Lexical Units</h1>
                    <div class="content is-small">
                        {{lexUnits.map(lu => lu.name).join(', ')}}
                    </div>
                  </article>
                </div>
            <!--<div class="tile is-parent">
              <article class="tile is-child">
                <h1 class="title is-6 low-margin-bottom">Frame Relations</h1>
              </article>
          </div>-->
          </div>
        </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <h1 class="title is-6 low-margin-bottom">Frame Elements</h1>
          <table class="table is-narrow is-fullwidth">
            <thead>
              <tr>
                <th class="content is-small">Name</th>
                <th class="content is-small"><abbr title="Core Type">CT</abbr></th>
                <th class="content is-small">Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fe in orderedFrameElements">
                <!-- <td class="content is-small">{{fe.name}}</td> -->
                <td class="content is-small" v-html="format_fename(fe.name)"></td>
                <td class="content is-small">{{fe.coreType}}</td>
                <td class="content is-small fnlabels" v-html="format_definition(fe.definition)"></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
module.exports = require('./Frame');
</script>
