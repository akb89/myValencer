<template>
<div v-if="state.input.length === 0" class="container is-fluid">
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="figure is-16by9">
                <img src='/public/front/img/logo.png' alt='Valencer Logo' />
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="field">
                <div class="control">
                    <input v-focus :value="state.input" @input="update_input" class="input" type="text" placeholder="Type your fantastic query" />
                </div>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-8">
            <div class="field">
                <div class="control has-text-centered">
                    <button @click="fetch_data" class="button is-info">Search</button>
                    <button @click="fetch_trying_data" class="button is-info">Try me out!</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div v-else class="container is-fluid">
    <div class="columns is-centered is-vcentered">
        <div class="column is-2">
            <div class="figure is-16by9">
                <img src='/public/front/img/logo.png' alt='Valencer Logo' />
            </div>
        </div>
        <div class="column is-8">
            <div class="field">
                <div class="control">
                    <input v-focus :value="state.input" @input="update_input" class="input" type="text" placeholder="Type your fantastic query" />
                </div>
            </div>
        </div>
        <div class="column is-2">
            <div class="field">
                <div class="control has-text-centered">
                    <button @click="fetch_data" class="button is-info">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{ 'is-active': state.display.annosets }" @click="display_tab('annosets')"><a>AnnotationSets</a></li>
        <li v-bind:class="{ 'is-active': state.display.frames }" @click="display_tab('frames')"><a>Frames</a></li>
        <li v-bind:class="{ 'is-active': state.display.lexunits }" @click="display_tab('lexunits')"><a>LexicalUnits</a></li>
      </ul>
  </div>
  <fn-annosets v-if="state.display.annosets"></fn-annosets>
  <fn-frames v-if="state.display.frames"></fn-frames>
  <fn-lexunits v-if="state.display.lexunits"></fn-lexunits>
    </div>
</div>
</template>

<script>
module.exports = require('./home');
</script>
