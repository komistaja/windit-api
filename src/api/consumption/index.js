import { Router } from 'express'
import ConsumptionEventController from '../../db/controller/consumptionEventController'
const router = Router()

export default () => {
  /**
   * @swagger
   * /consumption:
   *   get:
   *     description: List of consumption events
   *     tags:
   *       - consumption
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

  /**
   * @swagger
   * /consumption/{consumptionId}:
   *   get:
   *     description: A consumption event
   *     tags:
   *       - consumption
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: consumptionId
   *         schema:
   *           type: integer
   *         required: true
   *         description: consumption Id
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
   *         description: A object containing a consumption event
   *       404:
   *         description: Not found
   */

  /**
   * @swagger
   * /consumption:
   *   post:
   *     description: Create consumption
   *     tags:
   *       - consumption
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               user_id:
   *                 type: integer
   *               ingredient_id:
   *                 type: integer
   *               amount:
   *                 type: integer
   *               created_at:
   *                 type: string
   *               updated_at:
   *                 type: string
   *               consumed:
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
   * /consumption:
   *   put:
   *     description: Update consumption event
   *     tags:
   *       - consumption
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
   *               user_id:
   *                 type: integer
   *               ingredient_id:
   *                 type: integer
   *               amount:
   *                 type: integer
   *               created_at:
   *                 type: string
   *               updated_at:
   *                 type: string
   *               consumed:
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
   * /consumption/{consumptionId}:
   *   delete:
   *     description: Delete a consumption event
   *     tags:
   *       - consumption
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: consumptionId
   *         schema:
   *           type: integer
   *         required: true
   *         description: consumption Id
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
  router.use('/', new ConsumptionEventController().route())
  return router
}
