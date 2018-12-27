import { connect } from 'react-redux'
import EpisodeDetailsComponent from 'Episode/Details/EpisodeDetailsComponent'
import loadSingleEpisode from 'Episode/Load/EpisodeLoadSingle'
import { Episode } from 'Episode/Episode'

const mapsStateToProps = state => ({
    episode: state.episode.current || new Episode(),
})

const mapDispatchToProps = dispatch => ({
    load: id => dispatch(loadSingleEpisode(id)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeDetailsComponent)
