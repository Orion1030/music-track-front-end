import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { getNavLinks } from '~/utils/navigation'

import { Navigation } from '.'

const meta = {
  title: 'Navigation',
  component: Navigation,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} satisfies Meta<typeof Navigation>

const navLink = getNavLinks()
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links: navLink,
  },
}
