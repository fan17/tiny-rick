import { SINGLE_EPISODE_LOADED } from 'Episode/Load/EpisodeLoadSingle'
import { SINGLE_EPISODE_COMMENTS_LOADED } from 'Episode/Comment/Load/EpisodeCommentLoadMany'

export const getInitialState = () => ({
    details: null,
    comments: {
        meta: {},
        items: {},
    },
    characters: [],
})

const EpisodeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SINGLE_EPISODE_LOADED:
            return {
                ...state,
                details: action.episode,
            }
        case SINGLE_EPISODE_COMMENTS_LOADED: {
            return {
                ...state,
                comments: {
                    meta: action.meta,
                    items: { ...state.comments.items, ...action.items },
                },
            }
        }
        default:
            return state
    }
}

export default EpisodeReducer
