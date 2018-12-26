import { combineReducers } from 'redux'
import EpisodesReducer from 'Episode/EpisodesReducer'
import ActiveEpisodeReducer from 'Episode/ActiveEpisodeReducer'

const rootReducer = combineReducers({
    episodes: EpisodesReducer,
    activeEpisode: ActiveEpisodeReducer,
})

export default rootReducer
