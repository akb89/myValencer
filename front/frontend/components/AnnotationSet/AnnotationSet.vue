<template>  
    <div class="box">
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
          <div class="control no-flex-shrink">
            <div class="tags has-addons">
              <span class="tag">valence pattern</span>
              <span class="tag is-white has-small-padding-left has-small-padding-right" v-for="p in format_pattern(pattern)">{{p}}</span>
            </div>
          </div>
          </div>
    </div>
</template>
<script>
module.exports = require('./AnnotationSet');
</script>
