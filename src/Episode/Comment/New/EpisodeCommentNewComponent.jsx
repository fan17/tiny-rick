import React from 'react'
import PropTypes from 'prop-types'

class EpisodeCommentNewComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: '',
            content: '',
        }
    }

    async addComment() {
        await this.props.add(this.props.episodeId, {
            author: this.state.author,
            content: this.state.content,
        })

        this.setState({
            author: '',
            content: '',
        })
    }

    render() {
        return (
            <form onSubmit={() => this.addComment()}>
                <textarea
                    value={this.state.content}
                    onChange={event =>
                        this.setState({ content: event.target.value })
                    }
                />
                <input
                    type="text"
                    value={this.state.author}
                    onChange={event =>
                        this.setState({ author: event.target.value })
                    }
                />
                <button type="button">+</button>
            </form>
        )
    }
}

EpisodeCommentNewComponent.propTypes = {
    add: PropTypes.func.isRequired,
    episodeId: PropTypes.number.isRequired,
}

export default EpisodeCommentNewComponent
