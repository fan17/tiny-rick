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
                <div className="characters-list">
                    <transition-group name="fade-up" appear>
                        {charactersToDisplay.map(character => (
                            <div className="base-item" key={character.id}>
                                <header className="base-item__header">
                                    {character.image ? (
                                        <img
                                            className="base-item__img"
                                            src={character.image}
                                            alt={character.name}
                                        />
                                    ) : (
                                        ''
                                    )}
                                    <div className="base-item__header-content">
                                        <h3 className="base-item__title">
                                            {character.name}
                                        </h3>
                                        <span className="base-item__subtitle">
                                            {character.species}
                                            {' from '}
                                            {character.origin}
                                        </span>
                                    </div>
                                </header>
                            </div>
                        ))}
                    </transition-group>
                </div>

                <transition name="fade-up">
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
                            show less
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
                            show more
                        </button>
                    )}
                </transition>
            </>
        )
    }

    render() {
        return (
            <>
                <h2>Characters</h2>
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
