import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { CalenderDailyView } from '.';

const meta: Meta<typeof CalenderDailyView> = {
  title: 'views/Calender/CalenderDailyView',
  component: CalenderDailyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const day = {
  date: new Date("2024-02-05")
}

export const Test: Story = {
  args: {
    handleClick: action('handleClick'),
    day: day,
  },
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button');
    expect(button).toBeInTheDocument();
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("0");
    await userEvent.click(button);
    expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("1");
  },
};
