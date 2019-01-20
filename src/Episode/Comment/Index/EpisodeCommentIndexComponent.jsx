import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import EpisodeCommentComponent from 'Episode/Comment/EpisodeCommentComponent'
import EpisodeCommentNewContainer from 'Episode/Comment/New/EpisodeCommentNewContainer'
import { EpisodeComment } from 'Episode/Comment/EpisodeComment'

class EpisodeCommentIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            page: 1,
        }
    }

    async load(episodeId, page) {
        this.setState({ loading: true })
        await this.props.load(episodeId, page)

        this.setState({
            page: page + 1,
            loading: false,
        })
    }

    renderComments() {
        return (
            <InfiniteScroll
                pageStart={this.state.page}
                loadMore={() =>
                    this.load(this.props.episodeId, this.state.page)
                }
                hasMore={
                    !this.state.loading &&
                    (this.props.hasMore || this.state.page === 1)
                }
                loader={this.constructor.renderPlaceHolder()}
            >
                <ul className="episode-comments__list">
                    {this.props.comments.map(comment => (
                        <li key={comment.id}>
                            <EpisodeCommentComponent
                                author={comment.author}
                                content={comment.content}
                                createdDate={comment.content}
                            />
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
                <h2 className="episode-comments__title">Comments</h2>
                <EpisodeCommentNewContainer episodeId={this.props.episodeId} />
                {this.renderComments()}
            </>
        )
    }
}

EpisodeCommentIndexComponent.propTypes = {
    episodeId: PropTypes.number.isRequired,
    load: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(PropTypes.instanceOf(EpisodeComment))
        .isRequired,
}

export default EpisodeCommentIndexComponent
