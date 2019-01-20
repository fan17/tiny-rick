import React from 'react'
import PropTypes from 'prop-types'

const EpisodeCommentComponent = ({ content, author, createdDate }) => (
    <div className="episode-comment">
        <div className="episode-comment__author">{author}</div>
        <div className="episode-comment__created-date">{createdDate}</div>
        <div className="episode-comment__content">{content}</div>
    </div>
)

EpisodeCommentComponent.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
}

export default EpisodeCommentComponent
