import React from 'react'
import PropTypes from 'prop-types'
import Character from 'Character/Character'
import EpisodeCharacterComponent from 'Episode/Character/EpisodeCharacterComponent'

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
                    <div
                        key={character.id}
                        className="episode-characters__item"
                    >
                        <EpisodeCharacterComponent
                            name={character.name}
                            origin={character.origin}
                            species={character.species}
                            image={character.image}
                        />
                    </div>
                ))}
                <div className="episode-characters__more">
                    {this.state.displayAll ? (
                        <button
                            type="button"
                            className="primary-link is-big"
                            onClick={() =>
                                this.setState(state => ({
                                    displayAll: !state.displayAll,
                                }))
                            }
                        >
                            Show less
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="primary-link is-big"
                            onClick={() =>
                                this.setState(state => ({
                                    displayAll: !state.displayAll,
                                }))
                            }
                        >
                            Show more
                        </button>
                    )}
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="episode-characters">
                <h2 className="episode-characters__title">Characters</h2>
                {this.state.loading
                    ? this.constructor.renderPlaceholder()
                    : this.renderCharacters()}
            </div>
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
