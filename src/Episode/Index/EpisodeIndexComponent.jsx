import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Episode } from 'Episode/Episode'
import EpisodeItem from 'Episode/Details/EpisodeItem'
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import { Link } from 'react-router-dom'

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
                    value={this.state.searchText}
                    onChange={event => this.onChangeSearch(event.target.value)}
                    placeholder="Search"
                />
            </div>
        )
    }

    renderEpisodes() {
        return (
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
                <ul className="episodes__list">
                    {this.props.episodes.map(episode => (
                        <li key={episode.id}>
                            <Link to={`/episode/${episode.id}`}>
                                <EpisodeItem
                                    id={episode.id}
                                    name={episode.name}
                                    number={episode.number}
                                    seasonNumber={episode.seasonNumber}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
        )
    }

    static renderPlaceHolder() {
        return <div key="placeholder">placeholder</div>
    }

    render() {
        return (
            <>
                <h1 className="main__title">Episodes</h1>
                <div className="episodes">
                    {this.renderSearch()}
                    {this.renderEpisodes()}
                </div>
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
