import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

export const Test: Story = {
  args: {
    handleClick: action('handleClick'),
    calender: calender,
  },
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button');
    expect(button).toBeInTheDocument();
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("0");
    await userEvent.click(button);
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("1");
  },
};


export const HelloButton: Story = {
  args: {
    handleClick: action('handleClick'),
    calender: calender,
  },
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button');
    expect(button).toBeInTheDocument();
  },
};