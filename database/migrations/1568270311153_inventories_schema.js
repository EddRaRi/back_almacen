'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventoriesSchema extends Schema {
  up () {
    this.create('inventories', (table) => {
      table.increments()

       table.integer('product_id').references('products.id').notNullable()
       table.integer('quantity').notNullable()
       table.float('price').notNullable()
       table.integer('user_id').references('users.id')
       table.float('tax').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('inventories')
  }
}

module.exports = InventoriesSchema
