import { combineReducers } from 'redux'
import EpisodesReducer from 'Episode/EpisodesReducer'
import ActiveEpisodeReducer from 'Episode/ActiveEpisodeReducer'
import CharacterReducer from 'Character/CharacterReducer'

const rootReducer = combineReducers({
    episodes: EpisodesReducer,
    activeEpisode: ActiveEpisodeReducer,
    character: CharacterReducer,
})

export default rootReducer
