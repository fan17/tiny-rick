import { combineReducers } from 'redux'
import EpisodeReducer from 'Episode/EpisodeReducer'
import CharacterReducer from 'Character/CharacterReducer'

const rootReducer = combineReducers({
    episode: EpisodeReducer,
    character: CharacterReducer,
})

export default rootReducer
