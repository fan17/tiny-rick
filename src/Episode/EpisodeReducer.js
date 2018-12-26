import { EPISODES_LOADED } from 'Episode/EpisodeActionType'

const getDefaultState = () => ({
    meta: {},
    items: {},
})

const EpisodeReducer = (state = getDefaultState(), action) => {
    switch (action.type) {
        case EPISODES_LOADED:
            return {
                ...state,
                meta: action.meta,
                items: action.items,
            }
        default:
            return state
    }
}

export default EpisodeReducer
