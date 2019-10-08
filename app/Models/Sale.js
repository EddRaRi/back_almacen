'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    products() {
        return this.belongsTo('App/Models/Product')
    }

    payments() {
        return this.belongsTo('App/Models/Payment', 'payment_method')
    }

    users() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Sale
