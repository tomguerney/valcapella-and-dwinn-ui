import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import AudioPlayer from './AudioPlayer'

export default class Track extends React.Component {
  render() {
    return (
      <Card
        style={{
          margin: 20,
          backgroundImage: 'url(' + this.props.backgroundImage + ')',
          backgroundSize: 'cover',
        }}>
        <CardActionArea disableRipple onClick={() => this.props.onTrackSelected(this.props.id)}>
          <Typography
            style={{ padding: 30, fontFamily: 'cinzel decorative' }}
            component='h1'
            variant='h2'
            align='center'>
            {this.props.title}
          </Typography>
        </CardActionArea>
        <Collapse in={this.props.openTrackId === this.props.id}>
          <AudioPlayer
            audioSource={this.props.audioSource}
            audioHidden={this.props.id !== this.props.openTrackId}
          />
        </Collapse>
      </Card>
    )
  }
}
