import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import { Episode } from 'Episode/Episode'

class EpisodeIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            page: 1,
            searchText: '',
        }

        this.timer = null
    }

    onChangeSearch(searchText) {
        const page = 1
        this.setState({ searchText, page })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.load(page, searchText)
        }, 300)
    }

    async load(page, searchText) {
        this.setState({ loading: true })
        await this.props.load(page, searchText)

        this.setState({
            page: page + 1,
            loading: false,
        })
    }

    renderSearch() {
        return (
            <>
                Search:{' '}
                <input
                    value={this.state.searchText}
                    onChange={event => this.onChangeSearch(event.target.value)}
                />
            </>
        )
    }

    renderEpisodes() {
        return (
            <>
                <InfiniteScroll
                    pageStart={this.state.page}
                    loadMore={() =>
                        this.load(this.state.page, this.state.searchText)
                    }
                    hasMore={
                        !this.state.loading &&
                        (this.props.hasMore || this.state.page === 1)
                    }
                    loader={this.constructor.renderPlaceHolder()}
                >
                    {this.props.episodes.map(episode => (
                        <div key={episode.id}>
                            <div>{`episode: ${episode.numberInSeason}`}</div>
                            <div>{`season: ${episode.seasonNumber}`}</div>
                            <div>{`name: ${episode.name}`}</div>
                            <Link to={`/episode/${episode.id}`}>link</Link>
                            <hr />
                        </div>
                    ))}
                </InfiniteScroll>
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
    hasMore: PropTypes.bool.isRequired,
}

export default EpisodeIndexComponent
