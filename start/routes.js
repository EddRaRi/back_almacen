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

Route.post('login', 'UserController.login')
Route.post('users/logout/:id', 'UserController.logout').middleware('auth')

Route.get('users/all','UserController.index')
Route.get('users/:id', 'UserController.getOne')
Route.post('users/register', 'UserController.store')
Route.put('users/update/:id', 'UserController.edit')

Route.get('products/all', 'ProductController.index')
Route.post('products/create', 'ProductController.store')
Route.put('products/update/:id', 'ProductController.edit')

Route.get('inventories/all', 'InventoryController.index')
Route.get('inventories/:id', 'InventoryController.getOne')
Route.post('inventories/create', 'InventoryController.store')

Route.get('transactions/all', 'TransactionController.index')
Route.post('transactions/create', 'TransactionController.store')

Route.get('sales/all', 'SaleController.index')
Route.post('sales/create', 'SaleController.store')
Route.put('sales/cancel/:id','SaleController.edit')
Route.get('sales/payment', 'SaleController.allPays')