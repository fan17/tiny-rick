import React from 'react'
import PropTypes from 'prop-types'
import QuizIndexStartComponent from 'Quiz/Index/QuizIndexStartComponent'
import QuizIndexResultComponent from 'Quiz/Index/QuizIndexResultComponent'
import QuestionInterface from 'Quiz/Question/QuestionInterface'
import QuizProgressBar from 'Quiz/QuizProgressBar'
import QuizQuestionComponent from 'Quiz/Question/QuizQuestionComponent'

class QuizIndexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            introductionHasBeenSeen: false,
            answers: {},
            result: {},
        }

        this.setAnswer = this.setAnswer.bind(this)

        this.STEPS = {
            START: 'START',
            QUESTION: 'QUESTION',
            SUMMARY: 'SUMMARY',
        }
    }

    reset = () =>
        this.setState({
            introductionHasBeenSeen: false,
            answers: {},
            result: {},
        })

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

    static renderPlaceholder() {
        return <>placeholder</>
    }

    getStep() {
        let step
        if (!this.state.introductionHasBeenSeen) {
            step = this.STEPS.START
        } else if (
            Object.keys(this.state.answers).length < this.props.questions.length
        ) {
            step = this.STEPS.QUESTION
        } else if (this.state.result.name && this.state.result.image) {
            step = this.STEPS.SUMMARY
        }

        return step
    }

    renderStep() {
        let result = ''
        switch (this.getStep()) {
            case this.STEPS.START:
                result = (
                    <QuizIndexStartComponent
                        start={() =>
                            this.setState({ introductionHasBeenSeen: true })
                        }
                    />
                )
                break
            case this.STEPS.QUESTION:
                {
                    const current = this.getQuestionIndex() + 1
                    const total = this.props.questions.length
                    const question = this.props.questions[
                        this.getQuestionIndex()
                    ]
                    result = (
                        <QuizQuestionComponent
                            current={current}
                            question={question}
                            setAnswer={this.setAnswer}
                            progressBar={
                                <QuizProgressBar
                                    current={current}
                                    total={total}
                                />
                            }
                        />
                    )
                }
                break
            case this.STEPS.SUMMARY:
                result = (
                    <QuizIndexResultComponent
                        name={this.state.result.name}
                        image={this.state.result.image}
                        startAgain={this.reset}
                    />
                )
                break
            default:
                result = this.constructor.renderPlaceholder()
        }

        return result
    }

    render() {
        return <div className="quiz">{this.renderStep()}</div>
    }
}

QuizIndexComponent.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInterface))
        .isRequired,
    send: PropTypes.func.isRequired,
}

export default QuizIndexComponent
