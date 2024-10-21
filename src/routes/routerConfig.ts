import { Home } from '~/pages/Home'
import { About } from '~/pages/About'

export const routes = [
  {
    path: '/home',
    name: 'Home',
    element: Home
  },
  {
    path: '/about',
    name: 'About',
    element: About
  }
]
