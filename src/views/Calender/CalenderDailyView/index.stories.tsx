import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { CalenderDailyView } from '.';

const meta: Meta<typeof CalenderDailyView> = {
  title: 'views/Calender/CalenderDailyView',
  component: CalenderDailyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    handleClick: action('handleClick'),
    day: new Date("2024-02-05"),
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    canvas.getByText("05")
  },
};
