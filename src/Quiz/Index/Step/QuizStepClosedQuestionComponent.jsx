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
                    <div key={option.id}>
                        <input
                            required
                            type="radio"
                            value={option.id}
                            onChange={event => this.onChange(event)}
                        />
                        {option.text}
                    </div>
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
