import { expect } from '@storybook/jest';

import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor, within } from '@storybook/testing-library';
import { ColorSelectView } from '.';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

const meta: Meta<typeof ColorSelectView> = {
  title: 'views/ColorSelectView',
  component: ColorSelectView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const defaultColor = 180
    const [color, setColor] = useState(defaultColor)
    const handleColorSelect = (selectColor: number) => {
      setColor(selectColor)
    }
    return (
      <>
        {color}
        < ColorSelectView handleColorSelect={handleColorSelect} defaultColorHSL={defaultColor} />
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    await fireEvent.click(canvas.getByTestId('color'))
  },
};
