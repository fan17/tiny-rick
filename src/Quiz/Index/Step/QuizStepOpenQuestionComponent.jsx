import React from 'react'
import PropTypes from 'prop-types'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'

class QuizStepOpenQuestionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: '',
        }
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.setAnswer(this.props.question.id(), this.state.answer)
    }

    render() {
        return (
            <div>
                QuizStepOpenQuestionComponent
                <br />
                Question {this.props.current}
                <br />
                {this.props.current - 1} / {this.props.total}
                {this.props.question.text()}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input
                        required
                        type="text"
                        value={this.state.answer}
                        onChange={event =>
                            this.setState({ answer: event.target.value })
                        }
                    />
                    <button type="submit">next</button>
                </form>
            </div>
        )
    }
}

QuizStepOpenQuestionComponent.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    question: PropTypes.instanceOf(OpenQuestion).isRequired,
    setAnswer: PropTypes.func.isRequired,
}
export default QuizStepOpenQuestionComponent
