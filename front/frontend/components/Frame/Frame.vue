<template>
  <div classclass="container is-fluid">
    <div class="columns is-centered is-multiline is-mobile">
        <div class="column is-10">
          <section class="hero is-primary">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">{{name}}</h1>
              </div>
            </div>
          </section>
        </div>
        <div class="column is-5">
          <div class="content is-small">
            <h1>Lexical Units</h1>
            <ul>
                <li v-for="item in lexUnits">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="column is-5">
          <div class="content is-small">
            <h1>Frame Elements</h1>
            <ul>
                <li v-for="item in frameElements">{{item.name}}</li>
            </ul>
          </div>
        </div>
    </div>
  </div>

<!-- <div class="columns is-centered">
    <div class="column is-10">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{name}}</h1>
          </div>
        </div>
      </section>
      <div class="content is-small">
        <p>{{definition}}</p>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-vertical">
          <div class="tile is-12 is-parent">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p>{{definition}}</p>
            </article>
          </div>
          <div class="tile is-12 is-parent">
            <article class="tile is-6 is-child">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-6 is-child">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
          </div>
        </div>
      </div>
        <div class="box">

            <h5>{{name}}</h5>
            <h6><strong>Lexical Units</strong></h6>
            <ul>
                <li v-for="item in lexUnits">{{item.name}}</li>
            </ul>
            <h6><strong>Frame Elements</strong></h6>
            <ul>
                <li v-for="item in frameElements">{{item.name}}</li>
            </ul>
            <div v-if="semTypes.length > 0">
                <h6><strong>Semantic Types</strong></h6>
                <ul>
                    <li v-for="item in semTypes">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</div> -->
</template>

<script>
module.exports = {
    name: 'Frame',
    props: ['name', 'lexUnits', 'frameElements', 'semTypes', 'definition'],
}
</script>
