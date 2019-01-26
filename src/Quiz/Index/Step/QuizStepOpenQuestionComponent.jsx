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
            <div className="quiz__question">
                <header className="quiz__question__header">
                    <h1>Question {this.props.current}</h1>
                    {/* <QuizProgressBar
                        current={this.props.current}
                        total={this.props.total}
                    /> */}
                </header>
                <div className="quiz__question__body">
                    <h1>{this.props.question.text()}</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input
                            required
                            type="text"
                            value={this.state.answer}
                            onChange={event =>
                                this.setState({ answer: event.target.value })
                            }
                        />
                        <button
                            type="submit"
                            className="quiz__button quiz__button--primary"
                        >
                            Next
                        </button>
                    </form>
                </div>
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
