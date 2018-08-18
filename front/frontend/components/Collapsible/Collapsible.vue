<template>
    <section class="accordions">
        <article :key="idx-1" :class="['accordion', {'is-active': state.items[idx-1]}]" v-for="idx in numberOfItems">
            <div @click.prevent="toggle(idx-1)">
                <slot 
                    :name="`title-${idx-1}`"
                > 
                </slot>
            </div>
            <div class="accordion-body" v-if="state.items[idx-1]">
                <slot :name="`body-${idx-1}`">
                </slot>
            </div>
        </article>
    </section>
</template>

<script>
    module.exports = require('./Collapsible');
</script>
