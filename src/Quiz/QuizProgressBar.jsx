import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class QuizProgressBar extends Component {
    static propTypes = {
        current: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
    }

    render() {
        const { current, total } = this.props
        const style = {
            width: `${((current - 1) / total) * 100}%`,
        }
        return (
            <div className="quiz__progress-bar">
                <div className="quiz__progress-bar-done" style={style} />
                <span className="quiz__progress-bar-text">
                    {total - current + 1} questions left
                </span>
            </div>
        )
    }
}
