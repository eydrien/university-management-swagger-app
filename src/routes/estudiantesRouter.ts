import express, { Request, Response } from 'express';
import * as estudianteController from '../controllers/estudiantesController';
import { Estudiantes } from '../models/estudiantesModel';

const estudianteRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Estudiantes
 *   description: Endpoints para gestionar estudiantes
 */

/**
 * @swagger
 * /estudiantes:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Estudiantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cod_e:
 *                 type: integer
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estudiante creado correctamente
 *       500:
 *         description: Error del servidor
 */
estudianteRouter.post('/', async (req: Request, res: Response) => {
    const newEstudiante: Estudiantes = req.body;
    estudianteController.create(newEstudiante, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
});

/**
 * @swagger
 * /estudiantes:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *       500:
 *         description: Error del servidor
 */
estudianteRouter.get('/', async (req: Request, res: Response) => {
    estudianteController.getAll((err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
});

/**
 * @swagger
 * /estudiantes/{cod_e}:
 *   get:
 *     summary: Obtener un estudiante por código
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: cod_e
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *       404:
 *         description: Estudiante no encontrado
 */
estudianteRouter.get('/:cod_e', async (req: Request, res: Response) => {
    const cod_e = parseInt(req.params.cod_e);
    estudianteController.getOne(cod_e, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
});

/**
 * @swagger
 * /estudiantes/{cod_e}:
 *   put:
 *     summary: Actualizar un estudiante
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: cod_e
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estudiante actualizado
 *       500:
 *         description: Error del servidor
 */
estudianteRouter.put('/:cod_e', async (req: Request, res: Response) => {
    const cod_e = parseInt(req.params.cod_e);
    const updatedEstudiante: Estudiantes = { ...req.body, cod_e };
    estudianteController.update(updatedEstudiante, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
});

/**
 * @swagger
 * /estudiantes/{cod_e}:
 *   delete:
 *     summary: Eliminar un estudiante
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: cod_e
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudiante eliminado
 *       500:
 *         description: Error del servidor
 */
estudianteRouter.delete('/:cod_e', async (req: Request, res: Response) => {
    const cod_e = parseInt(req.params.cod_e);
    estudianteController.remove(cod_e, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
});

export { estudianteRouter };
