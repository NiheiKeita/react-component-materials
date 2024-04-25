import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { AccordionView } from '.';

const meta: Meta<typeof ModalView> = {
  title: 'views/AccordionView',
  component: AccordionView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "ddd"
  },
  render: (args) => {
    return <AccordionView {...args} >Modal</AccordionView>
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
  },
};
