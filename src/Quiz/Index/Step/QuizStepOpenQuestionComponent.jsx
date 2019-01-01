import React from 'react'
import PropTypes from 'prop-types'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'
import QuizStepBaseQuestionComponent from 'Quiz/Index/Step/QuizStepBaseQuestionComponent'

class QuizStepOpenQuestionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: '',
        }
    }

    render() {
        return (
            <QuizStepBaseQuestionComponent
                current={this.props.current}
                total={this.props.total}
                question={this.props.question}
            >
                <div className="quiz__bottom-panel">
                    <input
                        required
                        type="text"
                        className="quiz__answer quiz__answer--text"
                        value={this.state.answer}
                        onChange={event =>
                            this.setState({
                                answer: event.target.value,
                            })
                        }
                    />
                    <button
                        type="button"
                        onClick={() =>
                            this.props.setAnswer(
                                this.props.question.id(),
                                this.state.answer
                            )
                        }
                        className="quiz__button quiz__button--primary"
                    >
                        next
                    </button>
                </div>
            </QuizStepBaseQuestionComponent>
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
