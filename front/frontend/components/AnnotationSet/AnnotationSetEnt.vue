<template>
    <div class="columns is-centered">
        <div class="column is-10">
            <div class="box">

                <!-- <hr /> -->
                <div class="content is-small">
                  <div class="fnlabels" v-html="display_annotation(text, labels)"></div>
                </div>
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag">frame</span>
                      <span class="tag is-white">{{frame.name}}</span>
                    </div>
                  </div>
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag">valence pattern</span>
                      <span class="tag is-white">{{format_pattern(pattern)}}</span>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = require('./AnnotationSetEnt');
</script>
