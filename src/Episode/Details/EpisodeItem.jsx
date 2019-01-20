import React from 'react'
import PropTypes from 'prop-types'

const EpisodeItem = ({ number, seasonNumber, name, airDate }) => (
    <div className="episode-item">
        <h3 className="episode-item__number">{`Episode: ${number}`}</h3>
        <h2 className="episode-item__name">{name}</h2>
        <span className="episode-item__season-badge">{`season ${seasonNumber}`}</span>
        {airDate ? (
            <div className="episode-item__air-date">
                <div className="episode-item__air-date__label">Air date</div>
                <div className="episode-item__air-date__value">{airDate}</div>
            </div>
        ) : (
            ''
        )}
    </div>
)

EpisodeItem.defaultProps = {
    airDate: null,
}

EpisodeItem.propTypes = {
    name: PropTypes.string.isRequired,
    seasonNumber: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    airDate: PropTypes.string,
}

export default EpisodeItem
