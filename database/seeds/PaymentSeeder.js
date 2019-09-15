'use strict'

/*
|--------------------------------------------------------------------------
| PaymentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Payment = use('App/Models/Payment')

class PaymentSeeder {
  async run () {

    const payment1 = new Payment()
    payment1.namePayment = 'Credit card'
    await payment1.save()

    const payment2 = new Payment()
    payment2.namePayment = 'Debit card'
    await payment2.save()

    const payment3 = new Payment()
    payment3.namePayment = 'PayPal'
    await payment3.save()

    const payment4 = new Payment()
    payment4.namePayment = 'Pantry vouchers'
    await payment4.save()

    const payment5 = new Payment()
    payment5.namePayment = 'Cash'
    await payment5.save()

    const payment6 = new Payment()
    payment6.namePayment = 'Electronic wallet'
    await payment6.save()

  }
}

module.exports = PaymentSeeder
