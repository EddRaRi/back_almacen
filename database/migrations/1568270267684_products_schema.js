'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()

      table.integer('code').notNullable()
      table.string('name',150).notNullable()
      table.text('description').notNullable()
      table.text('image').notNullable() //change

      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
