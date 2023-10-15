import { Router } from 'express'
import { startRouter } from './start.routes'
import { userRouter } from './user.routes'

const routes = Router()

routes.use('/api/status', startRouter)
routes.use('/api/user', userRouter)

export { routes }
