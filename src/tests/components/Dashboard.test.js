import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../components/Dashboard'

let wrapper, instance

beforeEach(() => {
  wrapper = shallow(<Dashboard />)
  instance = wrapper.instance()
})

test('should render Dashboard correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onTrackSelected with new id correctly', () => {
  const selectedId = 'track3'
  instance.onTrackSelected(selectedId)
  expect(wrapper.state('openTrackId')).toBe(selectedId)
})

test('should handle onTrackSelected with same id correctly', () => {
  const openTrackId = 'track4'
  wrapper.setState({ openTrackId })
  instance.onTrackSelected(openTrackId)
  expect(wrapper.state('openTrackId')).toBe('notrack')
})
