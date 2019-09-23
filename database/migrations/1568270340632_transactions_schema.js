'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionsSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()

      table.integer('inventory_id').references('inventories.id')
      table.timestamp('date').defaultTo(this.fn.now())
      table.integer('type').references('types.id')
      table.integer('quantity')

      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionsSchema
