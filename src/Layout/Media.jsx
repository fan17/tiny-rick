import React from 'react'
import PropTypes from 'prop-types'

class Media extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.image} />
                {this.props.render()}
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
}

export default Media
