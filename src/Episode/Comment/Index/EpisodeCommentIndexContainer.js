import { connect } from 'react-redux'
import EpisodeCommentIndexComponent from 'Episode/Comment/Index/EpisodeCommentIndexComponent'
import loadEpisodeComments from 'Episode/Comment/Load/EpisodeCommentLoadMany'

const mapsStateToProps = state => ({
    comments: Object.values(state.activeEpisode.comments.items),
    hasMore: Boolean(state.activeEpisode.comments.meta.next),
})

const mapDispatchToProps = dispatch => ({
    load: (episodeId, page) => dispatch(loadEpisodeComments(episodeId, page)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeCommentIndexComponent)
