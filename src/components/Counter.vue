<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter }}</h2>
    <h2>Computed: {{ counter }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementByArgument">+5</button>
    <button @click="decrement">-1</button>


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
    methods: {
        increment() {
            this.$store.commit('INCREMENT')
        },
        incrementByArgument() {
            this.$store.commit('INCREMENTBYARGUMENT', 5)
        },
        decrement() {
            this.$store.commit('DECREMENT')
        }
    },
}
</script>

<style scoped>

</style>