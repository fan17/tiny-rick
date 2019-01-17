import React from 'react'
import PropTypes from 'prop-types'
import Character from 'Character/Character'

class EpisodeCharacterIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            displayAll: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await this.props.load(this.props.ids)
        this.setState({ loading: false })
    }

    static renderPlaceholder() {
        return <>placeholder</>
    }

    renderCharacters() {
        const charactersToDisplay = this.state.displayAll
            ? this.props.characters
            : this.props.characters.slice(0, this.props.initialDisplayCounter)

        return (
            <>
                {charactersToDisplay.map(character => (
                    <div key={character.id}>
                        <div>{character.name}</div>
                        <div>{character.species}</div>
                        <div>{character.origin}</div>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
                {this.state.displayAll ? (
                    <button
                        type="button"
                        onClick={() =>
                            this.setState(state => ({
                                displayAll: !state.displayAll,
                            }))
                        }
                    >
                        show less
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() =>
                            this.setState(state => ({
                                displayAll: !state.displayAll,
                            }))
                        }
                    >
                        show more
                    </button>
                )}
            </>
        )
    }

    render() {
        return (
            <>
                Characters
                {this.state.loading
                    ? this.constructor.renderPlaceholder()
                    : this.renderCharacters()}
            </>
        )
    }
}

EpisodeCharacterIndexComponent.defaultProps = {
    initialDisplayCounter: 5,
}

EpisodeCharacterIndexComponent.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    load: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.instanceOf(Character)).isRequired,
    initialDisplayCounter: PropTypes.number,
}

export default EpisodeCharacterIndexComponent
