import React from 'react'
import { shallow } from 'enzyme'
import AudioPlayer from '../../components/AudioPlayer'

let wrapper, instance, mockAudioSource, audioMock

beforeEach(() => {
  mockAudioSource = 'mock_audio_source.mp3'
  audioMock = {
    src: '',
    play: jest.fn(),
    pause: jest.fn(),
    currentTime: 0,
  }
  wrapper = shallow(<AudioPlayer audioHidden={true} audioSource={mockAudioSource} />)
  instance = wrapper.instance()
  instance.audio.current = audioMock
})

test('should render AudioPlayer correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should not call pause when audioHidden is true and updated to true ', () => {
  instance.pause = jest.fn()
  wrapper.setProps({ audioHidden: true })
  expect(instance.pause).not.toHaveBeenCalled()
})

test('should call pause when audioHidden is false and updated to true ', () => {
  const lclWrapper = shallow(<AudioPlayer audioHidden={false} />)
  const lclInstance = lclWrapper.instance()
  lclInstance.pause = jest.fn()
  lclWrapper.setProps({ audioHidden: true })
  expect(lclInstance.pause).toHaveBeenCalled()
})

test('should call play when isPlaying is false and button is clicked', () => {
  instance.play = jest.fn()
  wrapper.find('WithStyles(ForwardRef(Button))').simulate('click')
  expect(instance.play).toHaveBeenCalled()
})

test('should call pause when isPlaying is true and button is clicked', () => {
  wrapper.setState({ isPlaying: true })
  instance.pause = jest.fn()
  wrapper.find('WithStyles(ForwardRef(Button))').simulate('click')
  expect(instance.pause).toHaveBeenCalled()
})

test('should handle play with unset audio source', () => {
  instance.play()
  expect(instance.audio.current.src).toBe(mockAudioSource)
  expect(audioMock.play).toHaveBeenCalled()
  expect(wrapper.state()).toMatchObject({ isPlaying: true, isLoading: true })
})

test('should handle play with set audio source', () => {
  const existingAudioSource = 'set_audio_src.mp3'
  instance.audio.current.src = existingAudioSource
  instance.play()
  expect(instance.audio.current.src).toBe(existingAudioSource)
  expect(audioMock.play).toHaveBeenCalled()
  expect(wrapper.state()).toMatchObject({ isPlaying: true, isLoading: true })
})

test('should handle pause correctly', () => {
  wrapper.setState({ isPlaying: true })
  instance.pause()
  expect(audioMock.pause).toHaveBeenCalled()
  expect(wrapper.state('isPlaying')).toBe(false)
})

test('should handle onTimeUpdate correctly', () => {
  const currentTime = 101
  audioMock.currentTime = currentTime
  wrapper.find('audio').prop('onTimeUpdate')()
  expect(wrapper.state('currentTime')).toBe(currentTime)
})

test('should handle onDurationChange correctly', () => {
  const duration = 1001
  audioMock.duration = duration
  wrapper.find('audio').prop('onDurationChange')()
  expect(wrapper.state('duration')).toBe(duration)
})

test('should hanel onWaiting correctly', () => {
  wrapper.find('audio').prop('onWaiting')()
  expect(wrapper.state('isLoading')).toBe(true)
})

test('should handle onPlaying correctly', () => {
  wrapper.find('audio').prop('onPlaying')()
  expect(wrapper.state()).toMatchObject({ isPlaying: true, isLoading: false })
})

test('should handle onEnded correctly', () => {
  wrapper.setState({ currentTime: 99, isPlaying: true })
  wrapper.find('audio').prop('onEnded')()
  expect(wrapper.state()).toMatchObject({ currentTime: 0, isPlaying: false })
})

test('should handle onSliderChange correctly', () => {
  const newTime = 303
  wrapper.find('WithStyles(WithStyles(ForwardRef(Slider)))').prop('onChange')({}, newTime)
  expect(wrapper.state('currentTime')).toBe(newTime)
  expect(audioMock.currentTime).toBe(newTime)
})
