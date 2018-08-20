<template>
<div v-if="$store.state.queries.current.length === 0" class="container is-fluid">
    <div class="columns is-centered" id="header">
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
                    <input v-focus :value="$store.state.queries.current" @input="update_input" @keyup.enter="fetch_data" class="input is-primary" type="text" placeholder="Type in a valence pattern to search..." />
                </div>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-8">
            <div class="field">
                <div class="control has-text-centered">
                    <button @click.prevent="fetch_data" class="button is-primary">Search</button>
                    <button @click.prevent="fetch_trying_data" class="button is-primary">Try me out!</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="content has-text-centered">
        <em> New to myValencer?
          <a href="https://github.com/akb89/valencer">Check out our manual</a> or
          click on <a @click.prevent="fetch_trying_data">Try me out!</a> </em>
      </div>
    </div>
    <footer class="footer">
  <div class="container">
    <div class="content has-text-centered is-small">
      <a href="https://bulma.io">
          <img src='/public/front/img/made-with-bulma.png' alt="Made with Bulma" width="128" height="24">
      </a>
      <p>
        Powered by the <a href="https://github.com/akb89/valencer">Valencer API</a>
        <br>
        Report bugs and request features on
        <a href="https://github.com/akb89/myValencer/issues">GitHub <i class="fa fa-github"></i></a>
      </p>
    </div>
  </div>
</footer>
</div>
<div v-else class="container is-fluid">
    <div class="columns is-multiline is-mobile is-centered is-vcentered" id="header">
      <div class="column is-2">
        <div class="image is-pointer" @click.prevent="gohome">
            <img src='/public/front/img/logo_colors_16by9_tiny.png' alt='myValencer Logo' />
        </div>
      </div>
      <div class="column is-10">
        <div class="columns is-mobile has-no-margin-bottom">
            <div class="column is-10">
                <div class="field">
                  <p class="control has-icons-right">
                    <input v-focus :value="$store.state.queries.current" @input="update_input" @keyup.enter="fetch_data" class="input is-primary" type="text" placeholder="Type your fantastic query" >
                    <span class="icon is-small is-right">
                      <i class="fa fa-search" aria-hidden="false"></i>
                    </span>
                  </p>
                </div>
            </div>
            <div class="column is-2">
                <button @click.prevent="fetch_data" class="button is-primary">Search</button>
            </div>
        </div>
        <div class="columns is-mobile">
            <div class="column is-3">
                <div class="field is-grouped">
                    <label class="label is-small has-small-margin-right">Extra Core FEs:</label>
                    <div class="control">
                        <label class="radio is-small">
                            <input type="radio" name="core_fe" value="true" v-model="state.core_fe">
                            Yes
                        </label>
                        <label class="radio is-small">
                            <input type="radio" name="core_fe" value="false" v-model="state.core_fe">
                            No
                        </label>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <div class="field is-grouped">
                    <label class="label is-small has-small-margin-right">Strict VU matching: </label>
                    <div class="control">
                        <label class="radio is-small">
                            <input class="is-small" type="radio" value="true" name="strict_vu" v-model="state.strict_vu">
                            Yes
                        </label>
                        <label class="radio is-small">
                            <input class="is-small" type="radio" value="false" name="strict_vu" v-model="state.strict_vu">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  <!--<div class="columns is-multiline is-mobile">
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
  </div>--> 
  <div class="columns is-mobile">
    <div class="column is-12">
      <div class="tabs is-centered" id="tabs">
        <ul>
            <li :class="{ 'is-active': $store.state.display.type === 'ANNOSET'}" @click="display_tab('ANNOSET')">
            <a>
                <span>Annotations</span>
                <span v-if="$store.state.annoset && $store.state.annoset.total" class="is-tab-tag tag is-primary">{{$store.state.annoset.total}}</span>
            </a>
            </li>
            <li :class="{ 'is-active': $store.state.display.type === 'FRAME' }" @click="display_tab('FRAME')">
                <a>
                    <span>Frames</span>
                    <span v-if="$store.state.frame && $store.state.frame.total" class="is-tab-tag tag is-primary">{{$store.state.frame.total}}</span>
                </a>
            </li>
            <li :class="{ 'is-active': $store.state.display.type === 'LEXUNIT'}" @click="display_tab('LEXUNIT')">
                <a>
                    <span>Lexical units</span>
                    <span v-if="$store.state.lexunit && $store.state.lexunit.total" class="is-tab-tag tag is-primary">{{$store.state.lexunit.total}}</span>
                </a>
            </li>
            <li :class="{ 'is-active': $store.state.display.type === 'CLUSTER'}" @click="display_tab('CLUSTER')">
                <a>
                    <span>Cluster</span>
                </a>
            </li>
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
