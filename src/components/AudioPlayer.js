import React from 'react'
import Button from '@material-ui/core/Button'
import AudioSlider from './AudioSlider'
import PlayStatusIcon from './PlayStatusIcon'
import { Grid } from '@material-ui/core'

export default class AudioPlayer extends React.Component {
  state = {
    isPlaying: false,
    isLoading: false,
    duration: 0,
    currentTime: 0,
  }
  audio = React.createRef()
  componentDidUpdate = (prevProps) => {
    if (prevProps.audioHidden !== this.props.audioHidden) {
      this.pause()
    }
  }
  onTogglePlay = () => {
    this.state.isPlaying ? this.pause() : this.play()
  }
  play = () => {
    if (!this.audio.current.src || this.audio.current.src.length === 0) {
      this.audio.current.src = this.props.audioSource
    }
    this.setState(() => ({ isPlaying: true, isLoading: true }))
    this.audio.current.play()
  }
  pause = () => {
    this.setState(() => ({ isPlaying: false }))
    this.audio.current.pause()
  }
  onUpdateTime = () => {
    this.setState(() => ({ currentTime: this.audio.current.currentTime }))
  }
  onDurationChange = () => {
    this.setState(() => ({ duration: this.audio.current.duration }))
  }
  onWaiting = () => {
    this.setState(() => ({ isLoading: true }))
  }
  onPlaying = () => {
    this.setState(() => ({ isLoading: false, isPlaying: true }))
  }
  onEnded = () => {
    this.setState(() => ({ currentTime: 0, isPlaying: false }))
  }
  onSliderChange = (event, value) => {
    this.setState(() => ({ currentTime: value }))
    this.audio.current.currentTime = value
  }
  render() {
    return (
      <React.Fragment>
        <audio
          ref={this.audio}
          onTimeUpdate={this.onUpdateTime}
          onDurationChange={this.onDurationChange}
          onWaiting={this.onWaiting}
          onPlaying={this.onPlaying}
          onEnded={this.onEnded}
        />
        <table style={{ paddingBottom: 15, width: '100%' }}>
          <tbody>
            <tr>
              <td
                style={{
                  width: '80px',
                  maxWidth: '80px',
                  mindWidth: '80px',
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Button
                  variant='outlined'
                  style={{ minHeight: 45, minWidth: 60, backgroundColor: '#C8DEF4' }}
                  onClick={this.onTogglePlay}>
                  <PlayStatusIcon isPlaying={this.state.isPlaying} isLoading={this.state.isLoading} />
                </Button>
              </td>
              <td style={{ paddingLeft: 15, paddingRight: 15 }}>
                <Grid container justify='center'>
                  <AudioSlider
                    max={this.state.duration}
                    value={this.state.currentTime}
                    onChange={this.onSliderChange}
                  />
                </Grid>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
