import React from 'react'
import PropTypes from 'prop-types'
import { Episode } from 'Episode/Episode'
import EpisodeCharacterIndexContainer from 'Episode/Character/Index/EpisodeCharacterIndexContainer'
import EpisodeCommentIndexContainer from 'Episode/Comment/Index/EpisodeCommentIndexContainer'

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
                    <div>{`episode: ${this.props.episode.number}`}</div>
                    <div>{`season: ${this.props.episode.seasonNumber}`}</div>
                    <div>{`name: ${this.props.episode.name}`}</div>
                    <div>{`airDate: ${this.props.episode.airDate}`}</div>
                    <hr />
                </div>
                <EpisodeCharacterIndexContainer
                    ids={this.props.episode.characterIds}
                />
                <EpisodeCommentIndexContainer
                    episodeId={this.props.episode.id}
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
