import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Pause, PlayArrow } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 30,
    height: 30
  }
})

const PlayStatusIcon = props => {
  const classes = useStyles()
  if (props.isPlaying && props.isLoading) {
    return <CircularProgress size={20} />
  } else if (props.isPlaying) {
    return <Pause className={classes.root} />
  } else {
    return <PlayArrow className={classes.root} />
  }
}

export default PlayStatusIcon
