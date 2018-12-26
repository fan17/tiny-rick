import { connect } from 'react-redux'
import EpisodeIndexComponent from 'Episode/Index/EpisodeIndexComponent'
import loadManyEpisodes from 'Episode/Load/EpisodeLoadMany'

const mapsStateToProps = state => ({
    episodes: Object.values(state.episodes.items),
    hasMore: Boolean(state.episodes.meta.next),
})

const mapDispatchToProps = dispatch => ({
    load: (page, searchText) => dispatch(loadManyEpisodes(page, searchText)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeIndexComponent)
