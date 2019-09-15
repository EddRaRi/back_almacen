'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Type = use('App/Models/Type')

class TypeSeeder {
  async run () {

    const type1 = new Type()
    type1.nameType = 'Add'
    await type1.save()

    const type2 = new Type()
    type2.nameType = 'Substract'
    await type2.save()

    const type3 = new Type()
    type3.nameType = 'Remove'
    await type3.save()
    
  }
}

module.exports = TypeSeeder
