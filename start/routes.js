'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/allUsers','UserController.index')
Route.post('/setUser', 'UserController.store')

Route.get('/allProducts', 'ProductController.index')
Route.post('/setProduct', 'ProductController.store')

Route.get('/allInventory', 'InventoryController.index')
Route.post('/setInventory', 'InventoryController.store')

Route.get('/allTransaction', 'TransactionController.index')
Route.post('/setTransaction', 'TransactionController.store')

Route.get('/allSales', 'SaleController.index')
Route.post('/setSale', 'SaleController.store')
