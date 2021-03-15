import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'

//stores states
const rootReducer = combineReducers({
    player: playerReducer,

})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;