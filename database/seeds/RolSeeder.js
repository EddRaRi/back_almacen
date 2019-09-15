'use strict'

/*
|--------------------------------------------------------------------------
| RolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Rol = use('App/Models/Rol')

class RolSeeder {
  async run () {

    const rol = new Rol()
    rol.nameRol = 'Administrator'
    await rol.save()

    const rol2 = new Rol()
    rol2.nameRol = 'Cashier'
    await rol2.save()
  }
}

module.exports = RolSeeder
