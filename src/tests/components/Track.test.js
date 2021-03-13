import React from 'react'
import { shallow } from 'enzyme'
import Track from '../../components/Track'

let wrapper, onTrackSelected, id

beforeEach(() => {
  id = 'track1'
  onTrackSelected = jest.fn()
  wrapper = shallow(
    <Track
      id={id}
      title='Act 1'
      backgroundImage='background_image.png'
      audioSource='audio_source.mp3'
      onTrackSelected={onTrackSelected}
      openTrackId='notrack'
    />
  )
})

test('should render Track collapsed correctly', () => {
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('AudioPlayer').prop('audioHidden')).toBe(true)
  expect(wrapper.find('WithStyles(ForwardRef(Collapse))').prop('in')).toBe(false)
})

test('should render Track expanded correctly', () => {
  wrapper.setProps({ openTrackId: id })
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('AudioPlayer').prop('audioHidden')).toBe(false)
  expect(wrapper.find('WithStyles(ForwardRef(Collapse))').prop('in')).toBe(true)
})

test('should handle onTrackSelected correctly', () => {
  wrapper.find('WithStyles(ForwardRef(CardActionArea))').simulate('click')
  expect(onTrackSelected).toHaveBeenCalledWith(id)
})
