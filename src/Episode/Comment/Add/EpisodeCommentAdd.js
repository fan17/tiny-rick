export const ADD_COMMENT_TO_EPISODE = 'ADD_COMMENT_TO_EPISODE'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default (episodeId, rawComment) => dispatch => console.log('aaa')
// fetch(`http://tiny-rick.tk/api/episode/${episodeId}/comments`, {
//     method: 'post',
//     body: JSON.stringify(rawComment),
// })
//     .then(handleErrors)
//     .then(response => response.json())
//     .then(data => {
//         dispatch({
//             type: ADD_COMMENT_TO_EPISODE,
//             meta,
//             items,
//         })

//         return data
//     })
//     .catch(() => {
//         dispatch({
//             type: ADD_COMMENT_TO_EPISODE,
//             meta: {},
//             items: {},
//         })

//         return {}
//     })
