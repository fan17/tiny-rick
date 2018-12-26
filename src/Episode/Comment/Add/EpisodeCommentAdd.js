import randomString from 'randomstring'
import { EpisodeComment } from 'Episode/Comment/EpisodeComment'

export const ADD_COMMENT_TO_EPISODE = 'ADD_COMMENT_TO_EPISODE'

// http://tiny-rick.tk has cors restrictions, so I'm mocking POST request
export default (episodeId, rawComment) => dispatch =>
    new Promise(resolve => {
        const id = randomString.generate(7)
        const comment = new EpisodeComment(
            id,
            rawComment.author,
            rawComment.content
        )
        dispatch({
            type: ADD_COMMENT_TO_EPISODE,
            comment,
        })

        resolve(comment)
    })
