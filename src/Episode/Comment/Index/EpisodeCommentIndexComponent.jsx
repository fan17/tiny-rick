import React from 'react'
import PropTypes from 'prop-types'
import { EpisodeComment } from 'Episode/Comment/EpisodeComment'

class EpisodeCommentIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            displayAll: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await this.props.load(this.props.episodeId)
        this.setState({ loading: false })
    }

    static renderPlaceholder() {
        return <>placeholder</>
    }

    renderComments() {
        return (
            <>
                {this.props.comments.map(character => (
                    <div key={character.id}>
                        <div>{character.author}</div>
                        <div>{character.content}</div>
                    </div>
                ))}
            </>
        )
    }

    renderNewComment() {
        return (
            <>
                <textarea value={this.state.newCommentContent} />
                <input type="text" value={this.state.newCommentAuthor} />
                <button type="button">+</button>
            </>
        )
    }

    render() {
        return (
            <>
                Comments
                {this.renderNewComment()}
                {this.state.loading
                    ? this.constructor.renderPlaceholder()
                    : this.renderComments()}
            </>
        )
    }
}

EpisodeCommentIndexComponent.propTypes = {
    episodeId: PropTypes.number.isRequired,
    load: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(PropTypes.instanceOf(EpisodeComment))
        .isRequired,
}

export default EpisodeCommentIndexComponent
