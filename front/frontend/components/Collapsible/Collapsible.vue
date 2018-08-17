<template>
    <section class="accordions">
        <article :class="['accordion', {'is-active': state.items[idx-1]}]" v-for="idx in numberOfItems">
            <div class="accordion-header toggle" @click.prevent="toggle(idx-1)">
                <slot :name="`title-${idx-1}`"></slot>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <slot :name="`body-${idx-1}`"></slot>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    module.exports = require('./Collapsible');
</script>
