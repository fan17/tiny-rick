import React from 'react'
import PropTypes from 'prop-types'

const EpisodeCharacterComponent = ({ name, species, origin, image }) => (
    <div className="episode-character">
        <div className="episode-character__left-col">
            <img src={image} alt={name} />
        </div>
        <div className="episode-character__right-col">
            <h3 className="episode-character__name">{name}</h3>
            <div className="episode-character__info">{`${species} from ${origin}`}</div>
        </div>
    </div>
)

EpisodeCharacterComponent.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default EpisodeCharacterComponent
