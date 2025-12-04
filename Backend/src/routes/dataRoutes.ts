import { Router } from "express";
import { getData, addData } from "../controllers/dataController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Data:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         value:
 *           type: number
 *           description: The data value
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Timestamp of data
 *       example:
 *         value: 42
 *         timestamp: 2025-12-04T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Data
 *   description: API to manage real-time data
 */

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get all data
 *     tags: [Data]
 *     responses:
 *       200:
 *         description: List of all data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Data'
 */
router.get("/", getData);

/**
 * @swagger
 * /api/data:
 *   post:
 *     summary: Add a new data item
 *     tags: [Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Data'
 *     responses:
 *       201:
 *         description: Data item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Data'
 */
router.post("/", addData);

export default router;
