import {Nav, NavLink} from '~/styles/style'

import type { NavigationProps } from '~/types'

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <Nav>
      {links.map(({ to, label }) => (
        <NavLink key={label} to={to}>
          {label}
        </NavLink>
      ))}
    </Nav>
  )
}
