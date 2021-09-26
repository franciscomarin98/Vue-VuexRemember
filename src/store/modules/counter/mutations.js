export const INCREMENT = (state) => {
    state.counter++
    state.lastMutation = 'INCREMENT'
}

export const INCREMENTBYARGUMENT = (state, value) => {
    state.counter += value
    state.lastMutation = `INCREMENT-BY-ARGUMENT: ${value}`
    state.lastRandomInt = value
}

export const DECREMENT = (state) => {
    state.counter--
    state.lastMutation = 'DECREMENT'
}

export const SETLOADING =(state) => {
    state.isLoading = !state.isLoading
    state.lastMutation = 'SET-LOADING'
}