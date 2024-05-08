import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { VerticalSliderView } from '.';

const meta: Meta<typeof VerticalSliderView> = {
  title: 'views/Slider/VerticalSliderView',
  component: VerticalSliderView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Hello",
  },
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button');
    expect(button).toBeInTheDocument();
  },
};