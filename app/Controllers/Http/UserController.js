'use strict'

const User = use('App/Models/User')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({response}) {
    let users = await User.all()

    return response
      .status(200)
      .json(users)
  }

  async login ({ request, auth, response }) {
    
    const { email, password, key_notification } = request.only( ['email', 'password', 'key_notification'] )

    try {
      if (await auth.attempt(email, password)) {
          let user = await User.findBy('email', email)
          let accessToken = await auth.generate(user)
          console.log("entrando al login")

          console.log(user)

          user.key_notification = key_notification
          await user.save()

          return response.json({ "user": user, "token": accessToken })
      }

    } catch (e) {    
      return response.json(e) 
    }
 }

  async logout({response}){
    return response
    .status(201)
    .json("OK")
  }

  async show ({ auth, params, response }) {
    if (auth.user.id !== Number(params.id)) {
      console.log("BAD")
      return response.status(400).json("Mal")
    }
    console.log("nice")
    return response.status(200).json("Bien")
  }
  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let { username, email, password, rol } = request.only(['username', 'email','password','rol'])

    let user = new User()
    user.username = username
    user.email = email
    user.password = password
    user.rol = rol

    await user.save()

    return response
      .status(201)
      .json(user)

  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let id = params.id

    let user = await User.find(id)
    
    let { username, password, email, rol } = request.only(['username', 'password', 'email', 'rol'])

    user.username = username
    user.password = password
    user.email = email
    user.rol = rol

    await user.save()

    return response
      .status(200)
      .json(user)

  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
