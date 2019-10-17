'use strict'

const Product = use('App/Models/Product')
const Inventory = use ('App/Models/Inventory')
const Transanction = use ('App/Models/Transaction')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let product = await Product.all()

    return response
      .status(200)
      .json(product)
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const body = request.only(['name','description','image', 'price','quantity', 'user_id', 'tax'])

    let checkProduct = await Product.findBy('name',body.name)

    if (checkProduct == null){
      let product = await Product.create({
        name: body.name,
        //code: body.code,
        description: body.description,
        image: body.image
      })

      await product.save()

      let getProduct = await Product.findBy('name',body.name)

      getProduct.code = getProduct.id

      await getProduct.save()

      let inventory = await Inventory.create({
        product_id: getProduct.id,
        quantity: body.quantity,
        price: body.price,
        user_id: body.user_id,
        tax: body.tax
      })

      await inventory.save()

      let getInventory = await Inventory.findBy('product_id',getProduct.id)

      let transaction = await Transanction.create({
        inventory_id: getInventory.id,
        type: 2,
        quantity: getInventory.quantity
      })

      await transaction.save()

      return response
        .status(201)
        .json(getProduct)
    }else{
      return response
        .status(400)
        .json("Producto repetido/ ya existente")
    }

  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let id = params.id

    let user = await Product.find(id)
    let inventory = await Inventory.findBy('product_id', id)
    
    let { name, description, image, tax, price } = request.only(['name', 'description', 'image', 'tax', 'price'])

    user.name = name
    user.description = description
    user.image = image
    inventory.tax = tax
    inventory.price = price

    await user.save()
    await inventory.save()

    return response
      .status(200)
      .json([user,inventory])
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController
