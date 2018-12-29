import consumption from './consumption'
import symptom from './symptom'
import { Router } from 'express'
import UserController from '../../db/controller/userController'
const router = Router()
require('dotenv').config()

export default () => {
  router.param('id', async (req, res, next, id) => {
    req.userId = id
    next()
  })
  /**
   * @swagger
   * /user:
   *   get:
   *     description: List of active users
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                   name:
   *                     type: string
   *                   location:
   *                     type: string
   *                   locale:
   *                     type: string
   *                   password:
   *                     type: string
   *                   lastlogin:
   *                     type: string
   *                   created_at:
   *                     type: string
   *                   updated_at:
   *                     type: string
   *         description: An array of JSON objects containing users
   *       404:
   *         description: Not found
   */

  /**
   * @swagger
   * /user/{userId}:
   *   get:
   *     description: A user
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: userId
   *         schema:
   *           type: integer
   *         required: true
   *         description: User Id
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                 name:
   *                   type: string
   *                 location:
   *                   type: string
   *                 locale:
   *                   type: string
   *                 password:
   *                   type: string
   *                 lastlogin:
   *                   type: string
   *                 created_at:
   *                   type: string
   *                 updated_at:
   *                   type: string
   *         description: A object containing consumption events
   *       404:
   *         description: Not found
   */

  /**
   * @swagger
   * /user:
   *   post:
   *     description: Create user
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               location:
   *                 type: string
   *               locale:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                 user_id:
   *                   type: integer
   *                 ingredient_id:
   *                   type: integer
   *                 amount:
   *                   type: integer
   *                 created_at:
   *                   type: string
   *                 updated_at:
   *                   type: string
   *                 consumed:
   *                   type: string
   *         description: A object containing consumption events
   *       404:
   *         description: Not found
   */

  /**
   * @swagger
   * /user:
   *   put:
   *     description: Update user
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: integer
   *                 required: true
   *               name:
   *                 type: string
   *               location:
   *                 type: string
   *               locale:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                 user_id:
   *                   type: integer
   *                 ingredient_id:
   *                   type: integer
   *                 amount:
   *                   type: integer
   *                 created_at:
   *                   type: string
   *                 updated_at:
   *                   type: string
   *                 consumed:
   *                   type: string
   *         description: A object containing consumption events
   *       404:
   *         description: Not found
   */

  /**
   * @swagger
   * /user/{userId}:
   *   delete:
   *     description: Delete a user
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: userId
   *         schema:
   *           type: integer
   *         required: true
   *         description: User Id
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: integer
   *         description: Number of rows deleted
   *       404:
   *         description: Not found
   */

  router.use('/', new UserController().route())

  /**
   * @swagger
   * /user/{userId}/consumptions:
   *   get:
   *     description: List of consumptions events for users
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: userId
   *         schema:
   *           type: integer
   *         required: true
   *         description: User Id
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                   user_id:
   *                     type: integer
   *                   ingredient_id:
   *                     type: integer
   *                   amount:
   *                     type: integer
   *                   created_at:
   *                     type: string
   *                   updated_at:
   *                     type: string
   *                   consumed:
   *                     type: string
   *         description: An array of JSON objects containing consumption events
   *       404:
   *         description: Not found
   */
  router.use('/:id/consumptions', consumption())

  /**
   * @swagger
   * /user/{userId}/symptoms:
   *   get:
   *     description: List of symptom events for users
   *     tags:
   *       - user
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: userId
   *         schema:
   *           type: integer
   *         required: true
   *         description: User Id
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                   symptom_id:
   *                     type: integer
   *                   severity:
   *                     type: integer
   *                   user_id:
   *                     type: integer
   *                   start_time:
   *                     type: string
   *                   end_time:
   *                     type: string
   *         description: An array of JSON objects containing consumption events
   *       404:
   *         description: Not found
   */
  router.use('/:id/symptoms', symptom())
  return router
}
