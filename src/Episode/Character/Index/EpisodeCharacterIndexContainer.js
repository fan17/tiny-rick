import { connect } from 'react-redux'
import EpisodeCharacterIndexComponent from 'Episode/Character/Index/EpisodeCharacterIndexComponent'
import loadManyCharacters from 'Character/Load/CharacterLoadMany'

const mapsStateToProps = state => ({
    characters: Object.values(state.activeEpisode.characters),
})

const mapDispatchToProps = dispatch => ({
    load: ids => dispatch(loadManyCharacters(ids)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeCharacterIndexComponent)
