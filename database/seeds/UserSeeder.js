'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {

    const user = new User()
    user.username = 'admin'
    user.password = 'admin'
    user.email = 'admin@gmail.com'
    user.rol = 1
    await user.save()

    const user2 = new User()
    user2.username = 'casher'
    user2.password = 'casher'
    user2.email = 'casher@gmail.com'
    user2.rol = 2
    await user2.save()

  }
}

module.exports = UserSeeder
