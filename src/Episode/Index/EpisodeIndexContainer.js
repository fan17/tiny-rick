import { connect } from 'react-redux'
import EpisodeIndexComponent from 'Episode/Index/EpisodeIndexComponent'
import loadManyEpisodes from 'Episode/Load/EpisodeLoadMany'

const mapsStateToProps = state => ({
    episodes: Object.values(state.episode.items),
    hasMore: Boolean(state.episode.meta.next),
})

const mapDispatchToProps = dispatch => ({
    load: (page, searchText) => dispatch(loadManyEpisodes(page, searchText)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeIndexComponent)
