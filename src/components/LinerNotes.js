import React from 'react'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Credit from './Credit'

const LinerNotes = () => (
  <React.Fragment>
    <Typography align='justify' style={{ paddingTop: 15 }}>
      <em>Valcapella and Dwinn</em> was first published in issue 5 of{' '}
      <Link href='https://www.theliftedbrow.com'>The Lifted Brow</Link>. Daniel Handler (aka Lemony
      Snicket) wrote this blurb for the inside front cover, next to where the CD was:
    </Typography>
    <Typography align='justify' style={{ paddingTop: 15 }}>
      "DON’T DO WHAT YOU USUALLY DO when there’s a CD included with a magazine, which is leave it in
      the little thing. Take this out of the thing and listen to it because it’s an epic of
      heartbreak and awesomeness, fully acted-out and music-ed, and it demands your attention so
      just listen to it. What’s wrong with you, if you’re one of the people not listening to it? Are
      you going to use the excuse of having a traumatic childhood experience with a recording of an
      epic poem? Or are you just a morally stunted person who does nothing but self-Google and
      snack? Get ahold of yourself. Take the CD out of the thing. Move one step forward to the
      heavenly glory available here on Earth instead of eating so many corn chips and scrolling
      lonesomely down the address book in your phone."
    </Typography>
    <Container style={{ paddingTop: 20, paddingBottom: 30 }}>
      <Credit role='Written and Narrated by' nameText='Thomas Benjamin Guerney' />
      <Credit role='Directed, Produced, and Music-ed by' nameText='Joff Bush' />
      <Credit
        role='Starring'
        nameText="Hannah Perkins, Robbie O'brien, John McGeachin, Robert
    Bush, and Sarah Grey"
      />
      <Credit role='Cover Art by' nameText='Bradley Parker' />
    </Container>
  </React.Fragment>
)

export default LinerNotes
