import { connect } from 'react-redux'
import EpisodeCommentIndexComponent from 'Episode/Comment/Index/EpisodeCommentIndexComponent'
import loadEpisodeComments from 'Episode/Comment/Load/EpisodeCommentLoadMany'

const mapsStateToProps = state => ({
    comments: Object.values(state.episode.current.comments || {}),
})

const mapDispatchToProps = dispatch => ({
    load: episodeId => dispatch(loadEpisodeComments(episodeId)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeCommentIndexComponent)
