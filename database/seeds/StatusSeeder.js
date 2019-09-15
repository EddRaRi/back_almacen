'use strict'

/*
|--------------------------------------------------------------------------
| StatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Status = use('App/Models/Status')

class StatusSeeder {
  async run () {

    const status1 = new Status()
    status1.nameStatus = 'Sucess'
    await status1.save()

    const status2 = new Status()
    status2.nameStatus = 'Cancel'
    await status2.save()
  }
}

module.exports = StatusSeeder
