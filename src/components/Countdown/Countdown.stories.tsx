/* eslint-disable no-console */
import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BaseCountdown from '.'

export default {
  title: 'Commons/customs/Countdown',
  component: BaseCountdown,
  argTypes: {
    onFinish: { action: 'counter finished!' },
    ref: {
      current: {
        handleChange: { action: 'change counter' }
      }
    },
    startWhen: { description: 'Start counter then change some state' }
  }
} as ComponentMeta<typeof BaseCountdown>

const Template: ComponentStory<typeof BaseCountdown> = (args) => (
  <BaseCountdown {...args} />
)

export const Countdown = Template.bind({})

Countdown.args = {
  durationTimeInSeconds: 15
}
