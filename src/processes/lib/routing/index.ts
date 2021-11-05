import { privateRoutes, publicRoutes } from './routes'
import { renderRoutes } from './render-routes'

export const PrivatePages = () => renderRoutes(privateRoutes)
export const PublicPages = () => renderRoutes(publicRoutes)
