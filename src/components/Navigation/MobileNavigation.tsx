import { MobileNav, MobileNavLink} from '~/styles/style'

import type { NavigationProps } from '~/types'

export const MobileNavigation: React.FC<NavigationProps> = ({ links }) => {

  return (
    <MobileNav>
      {links.map(({ to, label }) => (
        <MobileNavLink key={label} to={to}>
          {label}
        </MobileNavLink>
      ))}
    </MobileNav>
  )
}
