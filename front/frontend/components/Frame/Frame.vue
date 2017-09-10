<template>
<div class="columns is-centered">
    <div class="column is-10">
        <div class="box">
            <h5>{{name}}</h5>
            <h6><strong>Lexical Units</strong></h6>
            <ul>
                <li v-for="item in lexUnits">{{item.name}}</li>
            </ul>
            <h6><strong>Frame Elements</strong></h6>
            <ul>
                <li v-for="item in frameElements">{{item.name}}</li>
            </ul>
            <div v-if="semTypes.length > 0">
                <h6><strong>Semantic Types</strong></h6>
                <ul>
                    <li v-for="item in semTypes">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    name: 'Frame',
    props: ['name', 'lexUnits', 'frameElements', 'semTypes'],
}
</script>
