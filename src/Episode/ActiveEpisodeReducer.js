import { SINGLE_EPISODE_LOADED } from 'Episode/Load/EpisodeLoadSingle'
import { SINGLE_EPISODE_COMMENTS_LOADED } from 'Episode/Comment/Load/EpisodeCommentLoadMany'
import { ADD_COMMENT_TO_EPISODE } from 'Episode/Comment/Add/EpisodeCommentAdd'
import { CHARACTERS_LOADED } from 'Character/Load/CharacterLoadMany'

export const getInitialState = () => ({
    details: null,
    comments: {
        meta: {},
        items: [],
    },
    characters: [],
})

const ActiveEpisodeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SINGLE_EPISODE_LOADED:
            return {
                ...state,
                details: action.episode,
            }
        case SINGLE_EPISODE_COMMENTS_LOADED: {
            const items = state.comments.items.concat(action.items)
            return {
                ...state,
                comments: {
                    meta: action.meta,
                    items,
                },
            }
        }
        case ADD_COMMENT_TO_EPISODE: {
            const items = state.comments.items
            items.unshift(action.comment)
            return {
                ...state,
                comments: {
                    meta: state.comments.meta,
                    items,
                },
            }
        }
        case CHARACTERS_LOADED: {
            return {
                ...state,
                characters: action.items,
            }
        }
        default:
            return state
    }
}

export default ActiveEpisodeReducer
