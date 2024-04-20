import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { CalenderMonthlyView } from '.';
import { eachDayOfInterval } from 'date-fns';

const meta: Meta<typeof CalenderMonthlyView> = {
  title: 'views/Calender/CalenderMonthlyView',
  component: CalenderMonthlyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>
let dates = eachDayOfInterval({ start: new Date(2024, 5, 1), end: new Date(2024, 5, 31) })
const calender = {
  month: 3,
  days: dates,
}

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
