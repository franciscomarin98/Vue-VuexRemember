import {createStore} from 'vuex'
import counterStore from "./modules/counter";

// Create a new store instance.
const store = createStore({
    modules: {
        counter: counterStore
    }
})

export default store;
