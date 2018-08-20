<template>
    <article :class="['accordion', {'is-active': open}]">
        <div @click.prevent="toggle">
            <slot 
                name="title"
            > 
            </slot>
        </div>
        <div class="accordion-body" v-if="open">
            <slot name="body">
            </slot>
        </div>
    </article>
</template>

<script>
    module.exports = require('./Collapsible');
</script>
