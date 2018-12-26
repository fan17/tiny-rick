import { EPISODES_LOADED } from 'Episode/EpisodeActionType'
import parseRawEpisode from 'Episode/EpisodeParse'

export default () => dispatch =>
    fetch('/episodes.json')
        .then(response => response.json())
        .then(data => {
            const meta = data.info
            const items = data.results.map(rawItem => parseRawEpisode(rawItem))

            dispatch({
                type: EPISODES_LOADED,
                meta,
                items,
            })

            return data
        })
