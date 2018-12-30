import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Episodes</Link>
                <Link to="/quiz">Quiz</Link>
            </nav>
        )
    }
}

export default Header
