import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
    background-color: red;
`

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Link to="/">Home</Link>
                <Link to="/">Episodes</Link>
                <Link to="/quiz">Quiz</Link>
            </Container>
        )
    }
}

export default Header
