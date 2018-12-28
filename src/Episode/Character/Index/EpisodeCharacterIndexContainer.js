import { connect } from 'react-redux'
import EpisodeCharacterIndexComponent from 'Episode/Character/Index/EpisodeCharacterIndexComponent'
import loadManyCharacters from 'Character/Load/CharacterLoadMany'

const mapsStateToProps = state => ({
    characters: Object.values(state.character.items),
})

const mapDispatchToProps = dispatch => ({
    load: ids => dispatch(loadManyCharacters(ids)),
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(EpisodeCharacterIndexComponent)
