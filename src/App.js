import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'Layout/Header'
import EpisodeIndexContainer from 'Episode/Index/EpisodeIndexContainer'
import EpisodeDetailsContainer from 'Episode/Details/EpisodeDetailsContainer'
import QuizIndexContainer from 'Quiz/Index/QuizIndexContainer'
import './styles/app.scss'

const App = () => (
    <Router>
        <div>
            <Header />
            <main className="main">
                <transition name="fade" mode="out-in">
                    <Route exact path="/" component={EpisodeIndexContainer} />
                    <Route
                        exact
                        path="/episode/:id([0-9])+"
                        render={props => (
                            <EpisodeDetailsContainer
                                id={Number(props.match.params.id)}
                            />
                        )}
                    />
                    <Route path="/quiz" component={QuizIndexContainer} />
                </transition>
            </main>
        </div>
    </Router>
)

App.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
}

export default App
