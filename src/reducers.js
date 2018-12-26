import { combineReducers } from 'redux'
import EpisodeReducer from 'Episode/EpisodeReducer'

const rootReducer = combineReducers({
    episode: EpisodeReducer,
})

export default rootReducer
