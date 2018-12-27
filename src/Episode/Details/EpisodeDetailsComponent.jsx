import React from 'react'
import PropTypes from 'prop-types'
import { Episode } from 'Episode/Episode'

class EpisodeDetailsComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await this.props.load(this.props.id)
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return 'placeholder'
        }
        return (
            <>
                EpisodeDetailsComponent
                <div>
                    <div>{`episode: ${this.props.episode.numberInSeason}`}</div>
                    <div>{`season: ${this.props.episode.seasonNumber}`}</div>
                    <div>{`name: ${this.props.episode.name}`}</div>
                    <div>{`airDate: ${this.props.episode.airDate}`}</div>
                    <hr />
                </div>
            </>
        )
    }
}

EpisodeDetailsComponent.propTypes = {
    load: PropTypes.func.isRequired,
    episode: PropTypes.instanceOf(Episode).isRequired,
    id: PropTypes.number.isRequired,
}

export default EpisodeDetailsComponent
