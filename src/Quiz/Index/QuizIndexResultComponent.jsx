import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class QuizIndexResultComponent extends React.Component {
    render() {
        return (
            <div className="quiz__container">
                <img
                    className="quiz__image-box quiz__image-box--fixed"
                    src={this.props.image}
                    alt="result"
                />
                <div className="quiz__text-box">
                    <header className="quiz__header">
                        <h1 className="quiz__character-name">
                            {this.props.name}
                        </h1>
                        <h2>
                            Find out which character from the series you are
                        </h2>
                    </header>
                    <div className="quiz__bottom-panel">
                        <Link to="/quiz">
                            <button
                                type="button"
                                className="quiz__button quiz__button--primary"
                            >
                                Start again
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                type="button"
                                className="quiz__button quiz__button--secondary"
                            >
                                Back to home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

QuizIndexResultComponent.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default QuizIndexResultComponent
