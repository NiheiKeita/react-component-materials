import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { CalenderWeeklyView } from '.';
import { eachDayOfInterval } from 'date-fns';



let dates = eachDayOfInterval({ start: new Date(2024, 5, 1), end: new Date(2024, 5, 7) })
const calender = {
  month: 3,
  days: dates,
}

const meta: Meta<typeof CalenderWeeklyView> = {
  title: 'views/Calender/CalenderWeeklyView',
  component: CalenderWeeklyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    handleClick: action('handleClick'),
    calender: calender,
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    canvas.getByText("05")
  },
};

