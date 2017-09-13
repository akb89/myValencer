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
    <div class="columns is-multiline is-mobile is-centered is-vcentered">
      <div class="column is-2">
        <div class="image is-16by9">
            <img src='/public/front/img/logo_16by9_tiny.png' alt='myValencer Logo' />
        </div>
      </div>
      <div class="column is-8">
        <div class="field">
          <p class="control has-icons-right">
            <input v-focus :value="state.input" @input="update_input" class="input" type="text" placeholder="Type your fantastic query" >
            <span class="icon is-small is-right">
              <i class="fa fa-search" aria-hidden="false"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="column is-2">
        <button @click="fetch_data" class="button is-info">Search</button>
      </div>
  </div>
  <!-- <div class="columns is-multiline is-mobile">
    <div class="column is-8 is-offset-2">
      <div class="field">
        <div class="control">
          <div class="select is-small">
            <select>
              <option>Language</option>
              <option>en</option>
            </select>
          </div>
          <div class="select is-small">
            <select>
              <option>Dataset</option>
              <option>1.5</option>
              <option>1.6</option>
              <option>1.7</option>
            </select>
          </div>
          <div class="select is-small">
            <select>
              <option>Extra Core FEs</option>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
          <div class="select is-small">
            <select>
              <option>Strict VU matching</option>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="columns is-mobile">
    <div class="column is-12">
      <div class="tabs is-centered">
        <ul>
          <li v-bind:class="{ 'is-active': state.display.annosets }" @click="display_tab('annosets')"><a>Annotations</a></li>
          <li v-bind:class="{ 'is-active': state.display.frames }" @click="display_tab('frames')"><a>Frames</a></li>
          <li v-bind:class="{ 'is-active': state.display.lexunits }" @click="display_tab('lexunits')"><a>Lexical units</a></li>
        </ul>
    </div>
    <fn-annosets v-if="state.display.annosets"></fn-annosets>
    <fn-frames v-if="state.display.frames"></fn-frames>
    <fn-lexunits v-if="state.display.lexunits"></fn-lexunits>
    </div>
  </div>
</div>
</template>

<script>
module.exports = require('./home');
</script>
