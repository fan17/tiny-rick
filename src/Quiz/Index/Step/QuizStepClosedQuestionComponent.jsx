import React from 'react'
import PropTypes from 'prop-types'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'

class QuizStepClosedQuestionComponent extends React.Component {
    onChange(event) {
        event.preventDefault()
        this.props.setAnswer(this.props.question.id(), event.target.value)
    }

    render() {
        return (
            <div>
                QuizStepClosedQuestionComponent
                <br />
                Question {this.props.current}
                <br />
                {this.props.current - 1} / {this.props.total}
                {this.props.question.text()}
                <form>
                    {this.props.question.options().map(option => (
                        <div key={option.id}>
                            <input
                                required
                                type="radio"
                                value={option.id}
                                onChange={this.onChange.bind(this)}
                            />
                            {option.text}
                        </div>
                    ))}
                </form>
            </div>
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
