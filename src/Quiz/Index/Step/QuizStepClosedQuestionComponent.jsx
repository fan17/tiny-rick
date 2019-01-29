import React from 'react'
import PropTypes from 'prop-types'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'

class QuizStepClosedQuestionComponent extends React.Component {
    onChange(event) {
        event.preventDefault()
        this.props.setAnswer(this.props.question.id(), event.target.value)
    }

    render() {
        const { question } = this.props
        return (
            <>
                {question.options().map(option => (
                    <label
                        key={option.id}
                        className="quiz__question-answer--radio"
                        htmlFor={`option_${option.id}`}
                        onClick={() => this.props.setAnswer(option.id)}
                    >
                        <input
                            required
                            type="radio"
                            id={option.id}
                            value={option.id}
                        />
                        {option.text}
                    </label>
                ))}
            </>
        )
    }
}

QuizStepClosedQuestionComponent.propTypes = {
    question: PropTypes.instanceOf(ClosedQuestion).isRequired,
    setAnswer: PropTypes.func.isRequired,
}
export default QuizStepClosedQuestionComponent
