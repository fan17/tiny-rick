import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuestionInterface from 'Quiz/Question/QuestionInterface'
import QuizStepOpenQuestionComponent from 'Quiz/Index/Step/QuizStepOpenQuestionComponent'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'
import QuizStepClosedQuestionComponent from 'Quiz/Index/Step/QuizStepClosedQuestionComponent'

export class QuizQuestionComponent extends Component {
    static propTypes = {
        current: PropTypes.number.isRequired,
        question: PropTypes.instanceOf(QuestionInterface).isRequired,
        setAnswer: PropTypes.func.isRequired,
        progressBar: PropTypes.node.isRequired,
    }

    state = {
        answer: '',
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.setAnswer(this.props.question.id(), this.state.answer)
    }

    render() {
        const { setAnswer, current, progressBar, question } = this.props

        return (
            <form onSubmit={this.onSubmit} className="quiz__form">
                <div className="quiz__container">
                    <div className="quiz__image-box quiz__image-box--hideable" />
                    <div className="quiz__question-box">
                        <header className="quiz__question-panel">
                            <div className="quiz__question-number">
                                Question {current}
                            </div>
                            {progressBar}
                            <div className="quiz__question">
                                {question.text()}
                            </div>
                        </header>
                        <div className="quiz__answer-panel">
                            {this.renderAnswers()}
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    renderAnswers() {
        const { setAnswer, current, progressBar, question } = this.props

        if (question instanceof OpenQuestion) {
            return (
                <QuizStepOpenQuestionComponent
                    setAnswer={answer => this.setState({ answer })}
                />
            )
        }

        if (question instanceof ClosedQuestion) {
            return (
                <QuizStepClosedQuestionComponent
                    question={question}
                    setAnswer={answer =>
                        this.setState(
                            { answer },
                            this.props.setAnswer(
                                this.props.question.id(),
                                answer
                            )
                        )
                    }
                />
            )
        }

        throw Error('Question type is not support')
    }
}

export default QuizQuestionComponent
