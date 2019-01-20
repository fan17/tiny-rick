import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconPlus } from 'assets/icon-plus.svg'

class EpisodeCommentNewComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: '',
            content: '',
        }
    }

    async add(event) {
        event.preventDefault()
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
            <form onSubmit={this.add.bind(this)} className="episode-new">
                <textarea
                    value={this.state.content}
                    onChange={event =>
                        this.setState({ content: event.target.value })
                    }
                    placeholder="Your comment here"
                />
                <div className="episode-new__author">
                    <input
                        type="text"
                        value={this.state.author}
                        onChange={event =>
                            this.setState({ author: event.target.value })
                        }
                        placeholder="Username"
                    />
                    <button type="submit">
                        <IconPlus />
                    </button>
                </div>
            </form>
        )
    }
}

EpisodeCommentNewComponent.propTypes = {
    add: PropTypes.func.isRequired,
    episodeId: PropTypes.number.isRequired,
}

export default EpisodeCommentNewComponent
