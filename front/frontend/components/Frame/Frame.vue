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
                <li v-for="item in frameElements">{{item.name}} -- {{item.coreType}}</li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
    name: 'Frame',
    props: ['name', 'lexUnits', 'frameElements', 'semTypes', 'definition'],
}
</script>
