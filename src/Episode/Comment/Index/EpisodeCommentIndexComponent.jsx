import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { EpisodeComment } from 'Episode/Comment/EpisodeComment'
import EpisodeCommentNewContainer from 'Episode/Comment/New/EpisodeCommentNewContainer'

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
            <transition-group name="fade-up">
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
                    {this.props.comments.map(comment => (
                        <div className="base-item" key={comment.id}>
                            <header className="base-item__header">
                                <div className="base-item__header-content">
                                    <h3 className="base-item__title">
                                        {comment.author}
                                    </h3>
                                    <span className="base-item__subtitle">
                                        {comment.createdDate}
                                    </span>
                                </div>
                            </header>
                            <p className="base-item__content">
                                {comment.content}
                            </p>
                        </div>
                    ))}
                </InfiniteScroll>
            </transition-group>
        )
    }

    static renderPlaceHolder() {
        return <div key="placeholder">placeholder</div>
    }

    render() {
        return (
            <div className="episode__right-col">
                <h2>Comments</h2>
                <div className="comments">
                    <EpisodeCommentNewContainer
                        episodeId={this.props.episodeId}
                    />
                    {this.renderComments()}
                </div>
            </div>
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
