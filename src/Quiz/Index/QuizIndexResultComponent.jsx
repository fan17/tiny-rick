import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class QuizIndexResultComponent extends React.Component {
    render() {
        const { name, image } = this.props
        return (
            <div className="quiz__container">
                <img
                    src={image}
                    className="quiz__image-box quiz__image-box--fixed"
                    alt={name}
                />
                <div className="quiz__text-box">
                    <div className="quiz__top-panel">
                        <h1 className="quiz__character-name">{name}</h1>
                        <h2>
                            Find out which character from the series you are
                        </h2>
                    </div>
                    <div className="quiz__bottom-panel">
                        <button
                            type="button"
                            className="quiz__button quiz__button--primary"
                            onClick={() => this.props.startAgain()}
                        >
                            Start again
                        </button>
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
    startAgain: PropTypes.func.isRequired,
}

export default QuizIndexResultComponent
