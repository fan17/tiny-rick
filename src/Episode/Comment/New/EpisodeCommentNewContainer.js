import { connect } from 'react-redux'
import addCommentToEpisode from 'Episode/Comment/Add/EpisodeCommentAdd'
import EpisodeCommentNewComponent from 'Episode/Comment/New/EpisodeCommentNewComponent'

const mapDispatchToProps = dispatch => ({
    add: (episodeId, rawComment) =>
        dispatch(addCommentToEpisode(episodeId, rawComment)),
})

export default connect(mapDispatchToProps)(EpisodeCommentNewComponent)
