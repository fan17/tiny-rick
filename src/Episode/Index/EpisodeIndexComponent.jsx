import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import { Episode } from 'Episode/Episode'
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'

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
            <div className="episodes__search">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchText}
                    onChange={event => this.onChangeSearch(event.target.value)}
                />
            </div>
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
                    loader={this.constructor.renderLoadingMore()}
                >
                    <transition-group
                        name="fade"
                        class="episodes__list"
                        tag="ul"
                    >
                        {this.props.episodes.map(episode => (
                            <li key={episode.id}>
                                <Link to={`/episode/${episode.id}`}>
                                    <div className="episode-item">
                                        <h3 className="episode-item__num">{`Episode ${
                                            episode.number
                                        }`}</h3>
                                        <h2 className="episode-item__name">
                                            {episode.name}
                                        </h2>
                                        <span className="episode-item__season-badge">
                                            Season {episode.seasonNumber}
                                        </span>
                                    </div>
                                    <div />
                                </Link>
                            </li>
                        ))}
                    </transition-group>
                </InfiniteScroll>
            </>
        )
    }

    static renderLoadingMore() {
        return (
            <div key="placeholder" className="episodes__loader">
                Loading more
            </div>
        )
    }

    render() {
        return (
            <div className="episodes">
                <h1 className="episodes__title">Episodes</h1>
                {this.renderSearch()}
                {this.renderEpisodes()}
            </div>
        )
    }
}

EpisodeIndexComponent.propTypes = {
    load: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.instanceOf(Episode)).isRequired,
    hasMore: PropTypes.bool.isRequired,
}

export default EpisodeIndexComponent
