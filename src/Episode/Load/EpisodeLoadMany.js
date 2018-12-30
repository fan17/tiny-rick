import parseRawEpisode from 'Episode/EpisodeParser'

export const EPISODES_LOADED = 'EPISODES_LOADED'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default (pageNumber = 1, searchKey = '') => dispatch =>
    fetch(
        `http://tiny-rick.tk/api/episode?page=${pageNumber}&name=${searchKey}`
    )
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            const meta = data.info
            const items = data.results.reduce((result, rawItem) => {
                const parsedItem = parseRawEpisode(rawItem)
                result[parsedItem.id] = parsedItem

                return result
            }, {})

            dispatch({
                type: EPISODES_LOADED,
                meta,
                items,
                searchKey,
            })

            return data
        })
        .catch(() => {
            dispatch({
                type: EPISODES_LOADED,
                meta: {},
                items: {},
                searchKey,
            })

            return {}
        })
