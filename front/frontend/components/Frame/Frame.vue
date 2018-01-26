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
                    <ul>
                      <li><a href="#">Path</a></li>
                      <li><a href="#">To</a></li>
                      <li><a href="#">The</a></li>
                      <li class="is-active"><a href="#" aria-current="page">Frame</a></li>
                    </ul>
                  </nav>
                </h2>
              </div>
            </div>
          </section>
            <div class="tile is-vertical is-12">
              <div class="tile">
                <div class="tile is-parent is-vertical is-8">
                  <article class="tile is-child">
                    <h1 class="title is-6 low-margin-bottom">Definition</h1>
                    <div class="content is-small">{{definition}}</div>
                  </article>
                  <article class="tile is-child">
                    <h1 class="title is-6 low-margin-bottom">Lexical Units</h1>
                  </article>
                </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <h1 class="title is-6 low-margin-bottom">Frame Relations</h1>
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-black">npm</span>
                      <span class="tag is-info">0.5.0</span>
                    </div>
                  </div>
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">build</span>
                      <span class="tag is-success">passing</span>
                    </div>
                  </div>

                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">chat</span>
                      <span class="tag is-primary">on gitter</span>
                    </div>
                  </div>
                </div>
                <div class="tags has-addons">
                  <span class="tag is-primary">inherits_from</span>
                  <span class="tag">frame</span>
                </div>
                <div class="tags has-addons">
                  <span class="tag">is_inherited_by</span>
                  <span class="tag is-primary">frame</span>
                </div>
              </article>
            </div>
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
                <td class="content is-small">{{fe.name}}</td>
                <td class="content is-small">{{fe.coreType}}</td>
                <td class="content is-small">{{fe.definition}}</td>
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
