<template>
    <div class="columns is-centered">
        <div class="column is-10">
            <div class="box">
                <div class="fnlabels" v-html="display_annotation(text, labels)"></div>
                <hr />
                <!-- <span class="tag is-white">Valence Pattern: </span> -->
                <span class="tag is-light">{{format_pattern(pattern)}}</span>
                <!-- <span class="tag is-white">Frame: </span> -->
                <span class="tag is-light">{{frame.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = require('./AnnotationSetEnt');
</script>
