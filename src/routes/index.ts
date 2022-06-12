import homeController from '../controllers/homeController'
import { HttpMethods } from '../typings'

const BASE_URL = '/wedding/v1'

export default [
  {
    path: `/`,
    method: 'get' as HttpMethods,
    action: homeController.hello
  },
  {
    path: `${BASE_URL}/guests`,
    method: 'get' as HttpMethods,
    action: homeController.getAllGuests
  },
  {
    path: `${BASE_URL}/guest`,
    method: 'get' as HttpMethods,
    action: homeController.getGuestByName
  },
  {
    path: `${BASE_URL}/guest`,
    method: 'post' as HttpMethods,
    action: homeController.createOrUpdateGuest
  },
  {
    path: `${BASE_URL}/guest/:id`,
    method: 'delete' as HttpMethods,
    action: homeController.deleteGuest
  }
]
