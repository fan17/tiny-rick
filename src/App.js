import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'Layout/Header'
import EpisodeIndexContainer from 'Episode/Index/EpisodeIndexContainer'
import EpisodeDetailsContainer from 'Episode/Details/EpisodeDetailsContainer'

const App = () => (
    <Router>
        <div>
            <Header />
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
            {/* <Route path="/topics" component={QuizIndex} /> */}
        </div>
    </Router>
)

export default App
