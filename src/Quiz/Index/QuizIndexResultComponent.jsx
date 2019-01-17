import React from 'react'
import PropTypes from 'prop-types'
import Media from 'Layout/Media'

class QuizIndexResultComponent extends React.Component {
    renderResult() {
        return (
            <div>
                QuizIndexResultComponent
                {this.props.name}
            </div>
        )
    }

    render() {
        return (
            <Media
                image={this.props.image}
                render={() => this.renderResult()}
            />
        )
    }
}

QuizIndexResultComponent.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default QuizIndexResultComponent
