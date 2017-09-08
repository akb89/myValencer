<template>
    <div class="columns is-centered">
        <div class="column is-10">
            <div class="box">
                <h5>Sentence</h5>
                <hr />
                <p v-html="format_sentence(sentence, labels, lexUnit.frame)"></p>
                <div v-if="pattern">
                    <h6><strong>Valence Pattern</strong>: {{format_pattern(pattern)}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = require('./AnnotationSet');
</script>
