import React from 'react'
import PropTypes from 'prop-types'
import QuizIndexStartComponent from 'Quiz/Index/QuizIndexStartComponent'
import QuizIndexResultComponent from 'Quiz/Index/QuizIndexResultComponent'
import QuizStepOpenQuestionComponent from 'Quiz/Index/Step/QuizStepOpenQuestionComponent'
import QuestionInterface from 'Quiz/Question/QuestionInterface'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'
import QuizStepClosedQuestionComponent from 'Quiz/Index/Step/QuizStepClosedQuestionComponent'
import Media from 'Layout/Media'

class QuizIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            introductionHasBeenSeen: false,
            answers: {},
            result: {},
        }

        this.setAnswer = this.setAnswer.bind(this)
    }

    getQuestionIndex() {
        return Object.keys(this.state.answers).length
    }

    setAnswer(questionId, answer) {
        this.setState(
            prevState => {
                const answers = prevState.answers
                answers[questionId] = answer

                return { answers }
            },
            async () => {
                if (
                    Object.keys(this.state.answers).length ===
                    this.props.questions.length
                ) {
                    const result = await this.props.send(this.state.answers) // eslint-disable-line react/no-access-state-in-setstate

                    this.setState({ result })
                }
            }
        )
    }

    renderQuestion() {
        const current = this.getQuestionIndex() + 1
        const total = this.props.questions.length
        const question = this.props.questions[this.getQuestionIndex()]

        let result = ''

        if (question instanceof OpenQuestion) {
            result = (
                <QuizStepOpenQuestionComponent
                    current={current}
                    total={total}
                    question={question}
                    setAnswer={this.setAnswer}
                />
            )
        }

        if (question instanceof ClosedQuestion) {
            result = (
                <QuizStepClosedQuestionComponent
                    current={current}
                    total={total}
                    question={question}
                    setAnswer={this.setAnswer}
                />
            )
        }

        if (!result) {
            throw Error('Question type is not support')
        }

        return result
    }

    static renderPlaceholder() {
        return <>placeholder</>
    }

    renderView() {
        if (!this.state.introductionHasBeenSeen) {
            return (
                <QuizIndexStartComponent
                    start={() =>
                        this.setState({ introductionHasBeenSeen: true })
                    }
                />
            )
        }

        if (
            Object.keys(this.state.answers).length < this.props.questions.length
        ) {
            return this.renderQuestion()
        }

        if (this.state.result.name && this.state.result.image) {
            return (
                <QuizIndexResultComponent
                    name={this.state.result.name}
                    image={this.state.result.image}
                />
            )
        }

        return this.constructor.renderPlaceholder()
    }

    render() {
        return <div className="quiz">{this.renderView()}</div>
    }
}

QuizIndexComponent.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInterface))
        .isRequired,
    send: PropTypes.func.isRequired,
}

export default QuizIndexComponent
