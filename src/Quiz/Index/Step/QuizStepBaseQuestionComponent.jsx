import React from 'react'
import PropTypes from 'prop-types'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'

class QuizStepBaseQuestionComponent extends React.Component {
    render() {
        const wizardStyle = {
            width: `${(100 / this.props.total) * (this.props.current - 1)}%`,
        }
        return (
            <form className="quiz__form">
                <div className="quiz__container">
                    <div className="quiz__image-box quiz__image-box--hideable" />
                    <div className="quiz__question-box">
                        <div className="quiz__question-info">
                            <h1 className="quiz__step">
                                Question {this.props.current}
                            </h1>
                            <div className="quiz__wizard">
                                <span className="quiz__wizard-text">
                                    {this.props.total - this.props.current + 1}{' '}
                                    left
                                </span>
                                <div
                                    className="quiz__wizard--inner"
                                    style={wizardStyle}
                                />
                            </div>
                            <span className="quiz__question">
                                {this.props.question.text()}
                            </span>
                        </div>
                        <div className="quiz__bottom-panel">
                            {this.props.render()}
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

QuizStepBaseQuestionComponent.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    question: PropTypes.instanceOf(OpenQuestion).isRequired,
    render: PropTypes.func.isRequired,
}
export default QuizStepBaseQuestionComponent
