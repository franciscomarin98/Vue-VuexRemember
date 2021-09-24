<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter }}</h2>
    <h2>Computed: {{ counter }}</h2>
    <h2>mapState: {{ counter }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "Counter",
    computed: {
        // counter() {
        //     return this.$store.state.counter;
        // },
        ...mapState(['counter', 'lastMutation']),
        // ...mapState[{
        //     counter: state => state.counter,
        //     lastMutation: state => state.lastMutation
        // }]
    },
}
</script>

<style scoped>

</style>