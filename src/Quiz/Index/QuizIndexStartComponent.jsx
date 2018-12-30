import React from 'react'
import PropTypes from 'prop-types'
import Media from 'Layout/Media'

class QuizIndexStartComponent extends React.Component {
    onSubmit(event) {
        event.preventDefault()
        this.props.start()
    }

    renderForm() {
        return (
            <div>
                QuizIndexStartComponent
                <form onSubmit={this.onSubmit.bind(this)}>
                    <button type="submit">next</button>
                </form>
            </div>
        )
    }

    render() {
        return (
            <Media
                image="http://tiny-rick-demo.tk/img/quiz-start.c6fd8b48.png"
                render={() => this.renderForm()}
            />
        )
    }
}

QuizIndexStartComponent.propTypes = {
    start: PropTypes.func.isRequired,
}

export default QuizIndexStartComponent
