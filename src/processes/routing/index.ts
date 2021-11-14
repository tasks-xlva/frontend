import { privateRoutes, publicRoutes } from 'processes/routing/lib/routes'
import { renderRoutes } from 'processes/routing/lib/render-routes'

export const PrivatePages = () => renderRoutes(privateRoutes)
export const PublicPages = () => renderRoutes(publicRoutes)
