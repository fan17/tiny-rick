import React from 'react'
import PropTypes from 'prop-types'

class QuizStepOpenQuestionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: '',
        }
    }

    setAnswer = answer => {
        this.setState({ answer })
        this.props.setAnswer(answer)
    }

    render() {
        return (
            <>
                <input
                    required
                    type="text"
                    value={this.state.answer}
                    onChange={event => this.setAnswer(event.target.value)}
                />
                <button
                    type="submit"
                    className="quiz__button quiz__button--primary"
                >
                    Next
                </button>
            </>
        )
    }
}

QuizStepOpenQuestionComponent.propTypes = {
    setAnswer: PropTypes.func.isRequired,
}
export default QuizStepOpenQuestionComponent
