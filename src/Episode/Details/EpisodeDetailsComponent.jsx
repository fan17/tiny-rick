import React from 'react'
import PropTypes from 'prop-types'
import { Episode } from 'Episode/Episode'
import EpisodeCharacterIndexContainer from 'Episode/Character/Index/EpisodeCharacterIndexContainer'

class EpisodeDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.load(this.props.id)
    }

    render() {
        if (!(this.props.episode instanceof Episode)) {
            return 'placeholder'
        }
        return (
            <>
                EpisodeDetailsComponent
                <div>
                    <div>{`episode: ${this.props.episode.numberInSeason}`}</div>
                    <div>{`season: ${this.props.episode.seasonNumber}`}</div>
                    <div>{`name: ${this.props.episode.name}`}</div>
                    <div>{`airDate: ${this.props.episode.airDate}`}</div>
                    <hr />
                </div>
                <EpisodeCharacterIndexContainer
                    ids={this.props.episode.characterIds}
                />
            </>
        )
    }
}

EpisodeDetailsComponent.defaultProps = {
    episode: null,
}

EpisodeDetailsComponent.propTypes = {
    load: PropTypes.func.isRequired,
    episode: PropTypes.instanceOf(Episode),
    id: PropTypes.number.isRequired,
}

export default EpisodeDetailsComponent
