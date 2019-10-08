'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
    types() {
        return this.belongsTo('App/Models/Type', 'type')
    }
}

module.exports = Transaction
