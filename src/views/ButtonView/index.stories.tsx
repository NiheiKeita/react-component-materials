import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ButtonView } from '.';



const meta: Meta<typeof ButtonView> = {
  title: 'views/ButtonView',
  component: ButtonView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Deafault: Story = {
  args: {
    text: "Hello",
  },
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByTestId('button');
    expect(button).toBeInTheDocument();
  },
};