import React from 'react'
import PropTypes from 'prop-types'
import { Episode } from 'Episode/Episode'
import EpisodeCharacterIndexContainer from 'Episode/Character/Index/EpisodeCharacterIndexContainer'
import EpisodeCommentIndexContainer from 'Episode/Comment/Index/EpisodeCommentIndexContainer'
import EpisodeItem from 'Episode/Details/EpisodeItem'

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
                <h1 className="main__title">Episode</h1>
                <div className="episode">
                    <div className="episode__left-col">
                        <div className="episode-details">
                            <EpisodeItem
                                name={this.props.episode.name}
                                seasonNumber={this.props.episode.seasonNumber}
                                number={this.props.episode.number}
                                airDate={this.props.episode.airDate}
                            />
                        </div>
                        <div className="episode-characters">
                            <EpisodeCharacterIndexContainer
                                ids={this.props.episode.characterIds}
                            />
                        </div>
                    </div>
                    <div className="episode__right-col">
                        <div className="episode-comments">
                            <EpisodeCommentIndexContainer
                                episodeId={this.props.episode.id}
                            />
                        </div>
                    </div>
                </div>
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
