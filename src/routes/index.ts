import { Router } from 'express'
import { startRouter } from './start.routes'
import { userRouter } from './user.routes'
import swaggerUi from 'swagger-ui-express'

import swaggerDocs from '../swagger.json'

const routes = Router()

routes.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routes.use('/api/status', startRouter)
routes.use('/api/users', userRouter)

export { routes }
