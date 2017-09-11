<template>
    <div class="columns is-centered">
        <div class="column is-10">
            <div class="box">
                <div class="fnlabels" v-html="display_annotation(text, labels)"></div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = require('./AnnotationSetEnt');
</script>
