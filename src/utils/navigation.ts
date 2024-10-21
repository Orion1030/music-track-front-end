import { routes } from '~/routes/routerConfig'

export const getNavLinks = () => {
  return routes.map(route => ({
    to: route.path,
    label: route.element.name
  }))
}
