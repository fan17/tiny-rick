import React from 'react'
import PropTypes from 'prop-types'
import { Episode } from 'Episode/Episode'

class EpisodeIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            initialized: false,
            searchText: '',
        }
    }

    async componentDidMount() {
        await this.props.load()
        this.setState({ initialized: true })
    }

    renderSearch() {
        return <>Search: {this.state.searchText}</>
    }

    renderEpisodes() {
        if (!this.state.initialized) {
            return this.constructor.renderPlaceHolder()
        }

        return (
            <>
                {this.props.episodes.map(episode => (
                    <React.Fragment key={episode.id}>
                        <div>{`episode: ${episode.numberInSeason}`}</div>
                        <div>{`season: ${episode.seasonNumber}`}</div>
                        <div>{`name: ${episode.name}`}</div>
                        <hr />
                    </React.Fragment>
                ))}
            </>
        )
    }

    static renderPlaceHolder() {
        return <>placeholder</>
    }

    render() {
        return (
            <>
                EpisodeIndexComponent
                {this.renderSearch()}
                {this.renderEpisodes()}
            </>
        )
    }
}

EpisodeIndexComponent.propTypes = {
    load: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.instanceOf(Episode)).isRequired,
}

export default EpisodeIndexComponent
