<template>
    <nav class="is-small pagination is-centered" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
        <li v-if="state.currentPage > 1"><a @click="goto(state.currentPage-1, $event)" class="pagination-link">Previous</a></li>
        <li v-if="state.currentPage > state.firstPage"><a @click="goto(1, $event)" class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li v-if="state.currentPage-1 > 2"><span class="pagination-ellipsis">&hellip;</span></li>
        <li v-if="state.currentPage > state.firstPage + 1"><a @click="goto(state.currentPage-1, $event)" class="pagination-link" :aria-label="`Goto page ${state.currentPage-1}`">{{state.currentPage-1}}</a></li>
        <li><a class="pagination-link is-current" :aria-label="`Page ${state.currentPage}`" aria-current="page">{{state.currentPage}}</a></li>
        <li v-if="state.currentPage < state.lastPage-1"><a @click="goto(state.currentPage+1, $event)" class="pagination-link" :aria-label="`Goto page ${state.currentPage+1}`">{{state.currentPage+1}}</a></li>
        <li v-if="state.currentPage+1 < state.lastPage-1"><span class="pagination-ellipsis">&hellip;</span></li>
        <li v-if="state.currentPage < state.lastPage"><a @click="goto(state.lastPage, $event)" class="pagination-link" :aria-label="`Goto page ${state.lastPage}`">{{state.lastPage}}</a></li>
        <li v-if="state.currentPage < state.lastPage"><a @click="goto(state.currentPage+1, $event)" class="pagination-link">Next</a></li>
    </ul>
    </nav>
</template>


<script>
module.exports = require('./Paginator');
</script>
