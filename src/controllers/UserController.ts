import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

class UserController {
  async create(request: Request, response: Response) {
    try {
      const userInfo = request.body

      await userService.create(userInfo)

      return response.status(201).json()
    } catch (error) {
      return response.status(500).send({
        error: 'Internal Server Error!',
        message: error,
      })
    }
  }

  async findByPk(request: Request, response: Response) {
    const { params } = request.params

    try {
      const user = await userService.findByPk(`${params}`)

      if (!user) {
        return response.status(400).json({
          message: 'User not found!',
        })
      }

      return response.json(user)
    } catch (error) {
      return response.status(500).send({
        error: 'Internal Server Error!',
        message: error,
      })
    }
  }
}

export { UserController }
