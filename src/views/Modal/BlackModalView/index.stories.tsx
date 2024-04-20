import { expect } from '@storybook/jest';

import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor, within } from '@storybook/testing-library';
import { BlackModalView } from '.';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof BlackModalView> = {
  title: 'views/Modal/BlackModalView',
  component: BlackModalView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: action('onClose')
  },
  render: (args) => {
    return <BlackModalView {...args} >Modal</BlackModalView>
  },
  play: async ({ args, canvasElement }) => {
    const canvas = await within(canvasElement)
    await fireEvent.click(canvas.getByTestId('background'))
    await waitFor(() => expect(args.onClose).toHaveBeenCalledTimes(1))
    await fireEvent.click(canvas.getByTestId('foreground'))
    await waitFor(() => expect(args.onClose).toHaveBeenCalledTimes(1))
    await fireEvent.click(canvas.getByTestId('closeButton'))
    await waitFor(() => expect(args.onClose).toHaveBeenCalledTimes(2))
  },
};
