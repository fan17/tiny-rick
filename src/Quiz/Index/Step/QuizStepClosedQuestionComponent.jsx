import React from 'react'
import PropTypes from 'prop-types'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'
import QuizStepBaseQuestionComponent from 'Quiz/Index/Step/QuizStepBaseQuestionComponent'

class QuizStepClosedQuestionComponent extends React.Component {
    render() {
        return (
            <QuizStepBaseQuestionComponent
                current={this.props.current}
                total={this.props.total}
                question={this.props.question}
                render={() => (
                    <div className="quiz__bottom-panel">
                        {this.props.question.options().map(option => (
                            <label
                                className="quiz__answer quiz__answer--select"
                                key={option.id}
                                htmlFor={`option_${option.id}`}
                            >
                                <input
                                    required
                                    type="radio"
                                    id={`option_${option.id}`}
                                    value={option.id}
                                    onChange={event =>
                                        this.props.setAnswer(
                                            this.props.question.id(),
                                            event.target.value
                                        )
                                    }
                                />
                                {option.text}
                            </label>
                        ))}
                    </div>
                )}
            />
        )
    }
}

QuizStepClosedQuestionComponent.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    question: PropTypes.instanceOf(ClosedQuestion).isRequired,
    setAnswer: PropTypes.func.isRequired,
}
export default QuizStepClosedQuestionComponent
