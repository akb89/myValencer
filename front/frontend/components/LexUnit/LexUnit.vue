<template>
  <div classclass="container is-fluid">
    <div class="columns is-centered is-multiline is-mobile">
        <div class="column is-10">
          <div class="box">
            <div class="content is-small">
              <h1>{{name}}</h1>
              <p>{{definition}}</p>
              <div class="tags has-addons">
                <span class="tag">frame</span>
                <span class="tag is-primary">{{frame.name}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
    name: 'LexUnit',
    props: ['id', 'name', 'pos', 'definition', 'semTypes', 'frame'],
}
</script>
