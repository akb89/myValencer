<template>
    <div :class="`circle-loader is-${color} has-background-${backgroundColor} is-${size}`">
        Loading...
    </div>
</template>

<script>
    module.exports = {
        props: {
            color: {type: String, default: 'turquoise'}, 
            backgroundColor: {type: String, default: 'white'},
            size: {type: String, default: 'normal'},
        }
    }
</script>
