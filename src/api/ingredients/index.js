import { Router } from 'express'
import IngredientController from '../../controller/ingredientController'

export default () => {
  const router = Router()
  router.param('id', new IngredientController().params)
  /**
   * @swagger
   * /ingredient:
   *   get:
   *     description: List of ingredients
   *     tags:
   *       - ingredient
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
   *                   fodmap:
   *                     type: boolean
   *                   gluten:
   *                     type: boolean
   *         description: An array of JSON objects containing ingredients
   *       404:
   *         description: Not found
   */
  router.get('/', new IngredientController().getAll)

  /**
   * @swagger
   * /ingredient/{ingredientId}:
   *   get:
   *     description: An ingredient
   *     tags:
   *       - ingredient
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: ingredientId
   *         schema:
   *           type: integer
   *         required: true
   *         description: Ingredient Id
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
   *                 fodmap:
   *                   type: boolean
   *                 gluten:
   *                   type: boolean
   *         description: A object containing an ingredient
   *       404:
   *         description: Not found
   */
  router.get('/:id', new IngredientController().getOne)

  /**
   * @swagger
   * /ingredient:
   *   post:
   *     description: Create ingredient
   *     tags:
   *       - ingredient
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
   *               fodmap:
   *                 type: boolean
   *               gluten:
   *                 type: boolean
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
   *         description: Response object
   *       404:
   *         description: Not found
   */
  router.post('/', new IngredientController().create)

  /**
   * @swagger
   * /ingredient:
   *   put:
   *     description: Update ingredient
   *     tags:
   *       - ingredient
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
   *               fodmap:
   *                 type: boolean
   *               gluten:
   *                 type: boolean
   *     responses:
   *       200:
   *         content:
   *           application/json:
   *             schema:
   *               type: integer
   *         description: Number of updated rows
   *       404:
   *         description: Not found
   */
  router.put('/', new IngredientController().update)

  /**
   * @swagger
   * /ingredient/{ingredientId}:
   *   delete:
   *     description: Delete an ingredient
   *     tags:
   *       - ingredient
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: ingredientId
   *         schema:
   *           type: integer
   *         required: true
   *         description: Ingredient Id
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
  router.delete('/', new IngredientController().delete)
  return router
}
