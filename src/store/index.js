import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            counter: 0,
            lastMutation: 'none'
        }
    },
    mutations: {
        INCREMENT(state) {
            state.counter++
            state.lastMutation = 'INCREMENT'
        },
        INCREMENTBYARGUMENT(state, value) {
            state.counter += value
            state.lastMutation = 'INCREMENT-BY-ARGUMENT'
        },
        DECREMENT(state) {
            state.counter--
            state.lastMutation = 'DECREMENT'
        }
    }
})

export default store;
