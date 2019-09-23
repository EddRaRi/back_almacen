'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()

      table.integer('product_id').references('products.id')
      table.integer('user_id').references('users.id')
      table.integer('quantity')
      table.float('total')
      table.timestamp('date').defaultTo(this.fn.now())
      table.float('discount')
      table.integer('payment_method').references('payments.id')
      table.integer('status').references('statuses.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SalesSchema
