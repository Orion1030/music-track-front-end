import { Outlet } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { Navigation, MobileNavigation } from '~/components/Navigation'
import { getNavLinks } from '~/utils/navigation'

export const NavContainer = () => {
  const navLinks = getNavLinks()

  return (
    <>
      {isMobile ? (
        <MobileNavigation links={navLinks} />
      ) : (
        <Navigation links={navLinks} />
      )}
      <Outlet />
    </>
  )
}
