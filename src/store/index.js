import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            counter: 0,
            lastMutation: 'none'
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store;
