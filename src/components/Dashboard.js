import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Track from './Track'
import LinerNotes from './LinerNotes'
import {
  coverArt,
  redBackground1,
  redBackground2,
  redBackground3,
  redBackground4,
  redBackground5,
} from '../assets/images'
import { track1, track2, track3, track4, track5 } from '../assets/audio'

class Dashboard extends React.Component {
  state = {
    openTrackId: 'notrack',
  }
  onTrackSelected = (id) => {
    if (id === this.state.openTrackId) {
      this.setState(() => ({ openTrackId: 'notrack' }))
    } else {
      this.setState(() => ({ openTrackId: id }))
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='sm' style={{ textAlign: 'center' }}>
          <img src={coverArt} style={{ width: '100%', marginTop: 30 }} />
          <Track
            id='track1'
            title='Act 1'
            backgroundImage={redBackground1}
            audioSource={track1}
            onTrackSelected={this.onTrackSelected}
            openTrackId={this.state.openTrackId}
          />
          <Track
            id='track2'
            title='Act 2'
            backgroundImage={redBackground2}
            audioSource={track2}
            onTrackSelected={this.onTrackSelected}
            openTrackId={this.state.openTrackId}
          />
          <Track
            id='track3'
            title='Act 3'
            backgroundImage={redBackground3}
            audioSource={track3}
            onTrackSelected={this.onTrackSelected}
            openTrackId={this.state.openTrackId}
          />
          <Track
            id='track4'
            title='Act 4'
            backgroundImage={redBackground4}
            audioSource={track4}
            onTrackSelected={this.onTrackSelected}
            openTrackId={this.state.openTrackId}
          />
          <Track
            id='track5'
            title='Act 5'
            backgroundImage={redBackground5}
            audioSource={track5}
            onTrackSelected={this.onTrackSelected}
            openTrackId={this.state.openTrackId}
          />
          <LinerNotes />
        </Container>
      </React.Fragment>
    )
  }
}

export default Dashboard
