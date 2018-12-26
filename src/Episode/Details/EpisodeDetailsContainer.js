import { connect } from 'react-redux'
import EpisodeDetailsComponent from 'Episode/Details/EpisodeDetailsComponent'
import loadSingleEpisode from 'Episode/Load/EpisodeLoadSingle'

const mapsStateToProps = state => ({
    episode: state.activeEpisode.details,
})

const mapDispatchToProps = dispatch => ({
    load: id => dispatch(loadSingleEpisode(id)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeDetailsComponent)
