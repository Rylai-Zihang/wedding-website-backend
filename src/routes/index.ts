import homeController from '../controllers/homeController'
import { HttpMethods } from '../typings'

const BASE_URL = '/wedding/v1'

export default [
  {
    path: `${BASE_URL}/guests`,
    method: 'get' as HttpMethods,
    action: homeController.getAllGuests
  },
  {
    path: `${BASE_URL}/guest`,
    method: 'post' as HttpMethods,
    action: homeController.createGuest
  },
  {
    path: `${BASE_URL}/guest/:id`,
    method: 'delete' as HttpMethods,
    action: homeController.deleteGuest
  }
]
