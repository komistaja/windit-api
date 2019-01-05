import { Router } from 'express'
import ConsumptionEventController from '../../controller/consumptionEventController'
const router = Router()

export default () => {
  router.param('id', new ConsumptionEventController().params)
  /**
   * @swagger
   * /consumptionevent:
   *   get:
   *     description: List of consumption events
   *     tags:
   *       - consumptionevent
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
  router.get('/', new ConsumptionEventController().getAll)

  /**
   * @swagger
   * /consumptionevent/{consumptioneventId}:
   *   get:
   *     description: A consumption event
   *     tags:
   *       - consumptionevent
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: consumptionId
   *         schema:
   *           type: integer
   *         required: true
   *         description: consumptionevent Id
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
  router.get('/:id', new ConsumptionEventController().getOne)

  /**
   * @swagger
   * /consumptionevent:
   *   post:
   *     description: Create consumptionevent
   *     tags:
   *       - consumptionevent
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
  router.post('/', new ConsumptionEventController().create)

  /**
   * @swagger
   * /consumptionevent:
   *   put:
   *     description: Update consumption event
   *     tags:
   *       - consumptionevent
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
  router.put('/', new ConsumptionEventController().update)


  /**
   * @swagger
   * /consumptionevent/{consumptioneventId}:
   *   delete:
   *     description: Delete a consumption event
   *     tags:
   *       - consumptionevent
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
  router.delete('/', new ConsumptionEventController().delete)
  return router
}
