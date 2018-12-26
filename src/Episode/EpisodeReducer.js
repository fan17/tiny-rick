import { EPISODES_LOADED } from 'Episode/Load/EpisodeLoadMany'

export const getInitialState = () => ({
    meta: {},
    items: {},
    searchKey: null,
})

const EpisodeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case EPISODES_LOADED: {
            const items =
                action.searchKey !== state.searchKey
                    ? action.items
                    : { ...state.items, ...action.items }
            return {
                ...state,
                meta: action.meta,
                items,
                searchKey: action.searchKey,
            }
        }
        default:
            return state
    }
}

export default EpisodeReducer
