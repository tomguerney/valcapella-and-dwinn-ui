import React from 'react'
import { shallow } from 'enzyme'
import PlayStatusIcon from '../../components/PlayStatusIcon'

test('should render PlayStatusIcon with play arrow image', () => {
  const wrapper = shallow(<PlayStatusIcon isPlaying={false} isLoading={false} />)
  expect(wrapper.find('PlayArrowIcon').length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})

test('should render PlayStatusIcon with pause image', () => {
  const wrapper = shallow(<PlayStatusIcon isPlaying={true} isLoading={false} />)
  expect(wrapper.find('PauseIcon').length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})

test('should render PlayStatusIcon with circular progress', () => {
  const wrapper = shallow(<PlayStatusIcon isPlaying={true} isLoading={true} />)
  expect(wrapper.find('WithStyles(ForwardRef(CircularProgress))').length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})
