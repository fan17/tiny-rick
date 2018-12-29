import { EpisodeComment } from 'Episode/Comment/EpisodeComment'

export const ADD_COMMENT_TO_EPISODE = 'ADD_COMMENT_TO_EPISODE'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default (episodeId, rawComment) => dispatch =>
    fetch(`http://tiny-rick.tk/api/episode/${episodeId}/comments`, {
        method: 'post',
        body: JSON.stringify(rawComment),
    })
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: ADD_COMMENT_TO_EPISODE,
                comment: new EpisodeComment(
                    undefined,
                    rawComment.author,
                    rawComment.content
                ),
            })

            return data
        })
        .catch(() => ({}))
