import React from 'react'
import { shallow } from 'enzyme'
import Credit from '../../components/Credit'

test('should render Credit correctly', () => {
  const wrapper = shallow(<Credit role='Written and Narrated by' nameText='Thomas Benjamin Guerney'/>)
  expect(wrapper).toMatchSnapshot()
})