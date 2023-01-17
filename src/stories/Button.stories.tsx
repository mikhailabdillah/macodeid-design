import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/core'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  type: 'button',
  size: 'normal',
  children: 'Filled',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  type: 'button',
  size: 'normal',
  children: 'Outlined',
}
