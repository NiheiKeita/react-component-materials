import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, waitFor, within } from '@storybook/testing-library';
import { CalenderWeeklyView } from '.';



const meta: Meta<typeof CalenderWeeklyView> = {
  title: 'views/Calender/CalenderWeeklyView',
  component: CalenderWeeklyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
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
  },
  play: async ({ args, canvasElement }) => {
    const camvas = within(canvasElement)
    // const button = await within(canvasElement).findByTestId('button');
    // expect(button).toBeInTheDocument();
    await waitFor(async () => {
      camvas.getByText("カレンダー")
    })
    await expect(camvas.queryByTestId('text')).toBeTruthy()
    await expect(camvas.queryByTestId('text-no')).toBeFalsy()
    await userEvent.type(await camvas.getByTestId('input'), 'input');
    await fireEvent.click(camvas.getByTestId('buttonddd'))
    await waitFor(() => expect(args.handleClick).toHaveBeenCalled())
  },
}
