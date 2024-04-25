import express from 'express'
import { requireSignIn, isAdmin } from '../middleware/authmiddlware.js'
import { createCategoryController } from '../controllers/categoryController.js'

const router = express.Router()

//routes

router.post('/create-category', isAdmin, createCategoryController);

export default router;