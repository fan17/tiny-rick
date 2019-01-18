import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as NavIcon } from 'assets/icon-menu.svg'
import { ReactComponent as CloseIcon } from 'assets/icon-close.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavVisible: false,
        }
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="header__logo">
                    <Logo />
                </Link>
                <button
                    className="header__nav-trigger"
                    type="button"
                    onClick={() =>
                        this.setState(prevState => ({
                            isNavVisible: !prevState.isNavVisible,
                        }))
                    }
                >
                    {this.state.isNavVisible ? <CloseIcon /> : <NavIcon />}
                </button>
                <nav
                    className={`header__nav ${
                        this.state.isNavVisible ? 'is-visible' : ''
                    }`}
                >
                    <NavLink
                        to="/"
                        className="header__nav-link"
                        activeClassName="header__nav-link-active"
                    >
                        Episodes
                    </NavLink>
                    <NavLink
                        to="/quiz"
                        className="header__nav-link"
                        activeClassName="header__nav-link-active"
                    >
                        Quiz
                    </NavLink>
                </nav>
            </header>
        )
    }
}

export default Header
