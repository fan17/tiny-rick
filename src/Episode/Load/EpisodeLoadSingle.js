import parseRawEpisode from 'Episode/EpisodeParser'

export const SINGLE_EPISODE_LOADED = 'SINGLE_EPISODE_LOADED'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default id => dispatch =>
    fetch(`http://tiny-rick.tk/api/episode/${id}`)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            const episode = parseRawEpisode(data)

            dispatch({
                type: SINGLE_EPISODE_LOADED,
                episode,
            })

            return data
        })
        .catch(() => {
            dispatch({
                type: SINGLE_EPISODE_LOADED,
                episode: {},
            })

            return {}
        })
