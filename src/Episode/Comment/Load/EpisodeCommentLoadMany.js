import parseRawComment from 'Episode/Comment/EpisodeCommentParser'

export const SINGLE_EPISODE_COMMENTS_LOADED = 'SINGLE_EPISODE_COMMENTS_LOADED'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default (episodeId, page = 1) => dispatch =>
    fetch(`http://tiny-rick.tk/api/episode/${episodeId}/comments?page=${page}`)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            const meta = data.info
            const items = data.results.reduce((result, rawItem) => {
                const parsedItem = parseRawComment(rawItem)
                result[parsedItem.id] = parsedItem

                return result
            }, {})

            dispatch({
                type: SINGLE_EPISODE_COMMENTS_LOADED,
                meta,
                items,
            })

            return data
        })
        .catch(() => {
            dispatch({
                type: SINGLE_EPISODE_COMMENTS_LOADED,
                meta: {},
                items: {},
            })

            return {}
        })
