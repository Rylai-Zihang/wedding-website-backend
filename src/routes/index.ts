import homeController from '../controllers/homeController'
import { HttpMethods } from '../typings'

export default [
  {
    path: '/guests',
    method: 'get' as HttpMethods,
    action: homeController.getAllGuests
  }
]
