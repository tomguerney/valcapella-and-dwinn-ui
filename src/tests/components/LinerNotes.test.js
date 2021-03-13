import React from 'react'
import { shallow } from 'enzyme'
import LinerNotes from '../../components/LinerNotes'

test('should render LinerNotes correctly', () => {
  const wrapper = shallow(<LinerNotes />)
  expect(wrapper).toMatchSnapshot()
})