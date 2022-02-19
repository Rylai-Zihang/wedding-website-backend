import homeController from '../controllers/homeController'

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  },
  {
    path: '/aa',
    method: 'get',
    action: homeController.helloAaaa
  }
]
