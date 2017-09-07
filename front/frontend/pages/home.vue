<template>
<div class="container is-fluid">
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
                    <input class="input" type="text" placeholder="Type your fantastic query" />
                </div>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-4">
            <div class="field"> 
                <div class="control has-text-centered">
                    <button class="button is-info">I'm feeling lucky</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
