import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Episode } from 'Episode/Episode'
import EpisodeCharacterIndexContainer from 'Episode/Character/Index/EpisodeCharacterIndexContainer'
import EpisodeCommentIndexContainer from 'Episode/Comment/Index/EpisodeCommentIndexContainer'
import { ReactComponent as ArrowLeftIcon } from 'assets/icon-arrow-left.svg'

class EpisodeDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.load(this.props.id)
    }

    render() {
        return this.props.episode instanceof Episode ? (
            <>
                <header className="episode__header">
                    <h1>Episode</h1>

                    <Link className="go-back-link" to="/">
                        <ArrowLeftIcon />
                        Search results
                    </Link>
                </header>
                <div className="episode__content">
                    <div className="episode__left-col">
                        <div className="episode-details">
                            <div className="episode-item">
                                <h3 className="episode-item__num">
                                    Episode {this.props.episode.number}
                                </h3>
                                <h2 className="episode-item__name">
                                    {this.props.episode.name}
                                </h2>
                                <span className="episode-item__season-badge">
                                    Season {this.props.episode.seasonNumber}
                                </span>
                                <div className="episode-info">
                                    <span className="episode-info__label">
                                        Air date
                                    </span>
                                    <span className="episode-info__value">
                                        {this.props.episode.airDate}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <EpisodeCharacterIndexContainer
                            ids={this.props.episode.characterIds}
                        />
                    </div>
                    <div className="episode__right-col">
                        <EpisodeCommentIndexContainer
                            episodeId={this.props.episode.id}
                        />
                    </div>
                </div>
            </>
        ) : (
            ''
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
