import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'Layout/Header'
import EpisodeIndexContainer from 'Episode/Index/EpisodeIndexContainer'
import EpisodeDetailsContainer from 'Episode/Details/EpisodeDetailsContainer'
import QuizIndexContainer from 'Quiz/Index/QuizIndexContainer'
import 'styles/app.scss'

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={EpisodeIndexContainer} />
            <Route
                exact
                path="/episode/:id([0-9])+"
                render={({ match }) => (
                    <EpisodeDetailsContainer id={Number(match.params.id)} />
                )}
            />
            <Route path="/quiz" component={QuizIndexContainer} />
        </div>
    </Router>
)

export default App
