import React from 'react'
import PropTypes from 'prop-types'

class QuizIndexStartComponent extends React.Component {
    render() {
        return (
            <div className="quiz__container">
                <div className="quiz__image-box" />
                <div className="quiz__text-box">
                    <header className="quiz__top-panel">
                        <h1>Which character are you?</h1>
                        <h2>
                            Find out which character from the series you are
                        </h2>
                    </header>
                    <div className="quiz__bottom-panel">
                        <button
                            type="button"
                            className="quiz__button quiz__button--primary"
                            onClick={() => this.props.start()}
                        >
                            Start
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

QuizIndexStartComponent.propTypes = {
    start: PropTypes.func.isRequired,
}

export default QuizIndexStartComponent
