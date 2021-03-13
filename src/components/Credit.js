import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const CreditTypography = props => (
  <Container style={{ paddingTop: 5, paddingBottom: 10 }}>
    <Typography style={{ fontFamily: 'Alegreya Sans SC' }} align='center'>
      {props.role}
    </Typography>
    <Typography align='center'>{props.nameText}</Typography>
  </Container>
)

export default CreditTypography
