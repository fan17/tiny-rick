import { connect } from 'react-redux'
import EpisodeIndexComponent from 'Episode/Index/EpisodeIndexComponent'
import EpisodeIndexLoad from 'Episode/Index/EpisodeIndexLoad'

const mapsStateToProps = state => ({
    episodes: Object.values(state.episode.items),
})

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(EpisodeIndexLoad()),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeIndexComponent)
