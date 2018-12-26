import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from 'Layout/Header'
import EpisodeIndexContainer from 'Episode/Index/EpisodeIndexContainer'

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={EpisodeIndexContainer} />
            {/* <Route path="/about" component={EpisodeDetails} /> */}
            {/* <Route path="/topics" component={QuizIndex} /> */}
        </div>
    </Router>
)

export default App
