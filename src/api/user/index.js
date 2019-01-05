import { Router } from 'express'
import UserController from '../../controller/userController'

export default () => {
  const router = Router()
  router.param('id', new UserController().params)
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
  router.get('/', new UserController().getAll)

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
  router.get('/:id', new UserController().getOne)

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
  router.post('/', new UserController().create)

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
  router.put('/', new UserController().update)

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

  router.delete('/', new UserController().delete)

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
  router.get('/:id/consumptions', new UserController().getUserConsumption)

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
  router.use('/:id/symptoms', new UserController().getUserSymptoms)
  return router
}
