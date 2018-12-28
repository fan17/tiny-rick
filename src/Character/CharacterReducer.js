import { CHARACTERS_LOADED } from 'Character/Load/CharacterLoadMany'

export const getInitialState = () => ({
    items: {},
})

const EpisodeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case CHARACTERS_LOADED: {
            return {
                ...state,
                items: action.items,
            }
        }
        default:
            return state
    }
}

export default EpisodeReducer
