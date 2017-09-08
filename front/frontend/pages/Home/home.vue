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
    <div class="columns">
        <div class="column is-offset-2 is-8">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="request_type" value="ANNOSET" v-model="state.request_type">
                    Annotation set 
                </label>
                <label class="radio">
                    <input type="radio" name="request_type" value="FRAME" v-model="state.request_type">
                    Frame 
                </label>
                <label class="radio">
                    <input type="radio" name="request_type" value="LEXUNIT" v-model="state.request_type">
                    Lexical unit 
                </label>
            </div>
            {{state.request_type}}
        </div>
    </div>
    <div v-if="$store.state.loading" class="columns is-centered">
        <loader></loader>
    </div>
        <lex-unit 
            v-if="state.final_request_type.startsWith('LEXUNIT')"
            v-for="item in $store.state.content" 
            :key="item._id"
            :id="item._id"
            :name="item.name" 
            :pos="item.pos" 
            :definition="item.definition" 
            :sem-types="item.semTypes"
            :frame="item.frame">
        </lex-unit>
        <f-frame
            v-if="state.final_request_type.startsWith('FRAME')"
            v-for="item in $store.state.content" 
            :key="item._id" 
            :name="item.name" 
            :sem-types="item.semTypes"
            :frame-elements="item.frameElements">
        </f-frame>
        <annotation-set
            v-if="state.final_request_type.startsWith('ANNOSET')"
            v-for="item in $store.state.content" 
            :key="item._id" 
            :sentence="item.sentence" 
            :labels="item.labels" 
            :lex-unit="item.lexUnit" 
            :pattern="item.pattern">
        </annotation-set>
    </div>
</div>
</template>

<script>
module.exports = require('./home');
</script>
