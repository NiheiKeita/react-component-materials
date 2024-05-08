
import { Meta, StoryObj } from '@storybook/react';
import { HorizontalSliderView } from '.';
import React from 'react';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof HorizontalSliderView> = {
  title: 'views/Slider/HorizontalSliderView',
  component: HorizontalSliderView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const SampleSlider1 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider1
    </div>
  )
})
const SampleSlider2 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider2
    </div>
  )
})
const SampleSlider3 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider3
    </div>
  )
})
export const Default: Story = {
  args: {
    // eslint-disable-next-line react/jsx-key
    sliders: [<SampleSlider1 />, <SampleSlider2 />, <SampleSlider3 />],
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement)
  },
};

