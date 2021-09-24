import {createStore} from 'vuex'
import getRandomInt from "../helpers/getRandomInt";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            counter: 0,
            lastMutation: 'none',
            isLoading: true,
            lastRandomInt: 0
        }
    },
    mutations: { //Síncronas por regla general
        INCREMENT(state) {
            state.counter++
            state.lastMutation = 'INCREMENT'
        },
        INCREMENTBYARGUMENT(state, value) {
            state.counter += value
            state.lastMutation = `INCREMENT-BY-ARGUMENT: ${value}`
            state.lastRandomInt = value
        },
        DECREMENT(state) {
            state.counter--
            state.lastMutation = 'DECREMENT'
        }
    },
    actions: { //Síncronas y Asíncronas
        async incrementRandomInt({commit}) {
            const randomNumber = await getRandomInt()
            commit('INCREMENTBYARGUMENT', randomNumber)
        }
    }
})

export default store;
