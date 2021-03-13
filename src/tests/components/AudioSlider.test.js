import React from 'react'
import { shallow } from 'enzyme'
import AudioSlider from '../../components/AudioSlider'

test('should render AudioSlider correctly', () => {
  const wrapper = shallow(<AudioSlider />)
  expect(wrapper).toMatchSnapshot()
})