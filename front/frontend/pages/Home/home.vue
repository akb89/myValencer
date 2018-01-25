<template>
<div v-if="$store.state.queries.current.length === 0" class="container is-fluid">
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="figure is-16by9">
                <img src='/public/front/img/logo_colors.png' alt='Valencer Logo' />
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="field">
                <div class="control">
                    <input v-focus :value="$store.state.queries.current" @input="update_input" @keyup.enter="fetch_data" class="input" type="text" placeholder="Type in a valence pattern to search..." />
                </div>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-8">
            <div class="field">
                <div class="control has-text-centered">
                    <button @click="fetch_data" class="button is-primary">Search</button>
                    <button @click="fetch_trying_data" class="button is-primary">Try me out!</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div v-else class="container is-fluid">
    <div class="columns is-multiline is-mobile is-centered is-vcentered">
      <div class="column is-2">
        <div class="image is-pointer" @click="gohome">
            <img src='/public/front/img/logo_colors_16by9_tiny.png' alt='myValencer Logo' />
        </div>
      </div>
      <div class="column is-8">
        <div class="field">
          <p class="control has-icons-right">
            <input v-focus :value="$store.state.queries.current" @input="update_input" @keyup.enter="fetch_data" class="input" type="text" placeholder="Type your fantastic query" >
            <span class="icon is-small is-right">
              <i class="fa fa-search" aria-hidden="false"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="column is-2">
        <button @click="fetch_data" class="button is-primary">Search</button>
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
          <li v-bind:class="{ 'is-active': $store.state.display.type === 'ANNOSET'}" @click="display_tab('ANNOSET')"><a>Annotations</a></li>
          <li v-bind:class="{ 'is-active': $store.state.display.type === 'FRAME' }" @click="display_tab('FRAME')"><a>Frames</a></li>
          <li v-bind:class="{ 'is-active': $store.state.display.type === 'LEXUNIT'}" @click="display_tab('LEXUNIT')"><a>Lexical units</a></li>
          <li v-bind:class="{ 'is-active': $store.state.display.type === 'CLUSTER'}" @click="display_tab('CLUSTER')"><a>Cluster</a></li>
        </ul>
    </div>
    <fn-annosets v-if="$store.state.display.type === 'ANNOSET'"></fn-annosets>
    <fn-frames v-if="$store.state.display.type === 'FRAME'"></fn-frames>
    <fn-lexunits v-if="$store.state.display.type === 'LEXUNIT'"></fn-lexunits>
    <fn-cluster v-if="$store.state.display.type === 'CLUSTER'" :lexunits="$store.state.cytolexunit.content" ></fn-cluster>
    </div>
  </div>
</div>
</template>

<script>
module.exports = require('./Home');
</script>
