import express from 'express'
// import product controller
import Product from './../controllers/product'

// init express router
const router = express.Router()

// get all products 
router.get('/product', Product.index)
// create a new product
router.post('/product', Product.create)
// update a product
router.put('/product/:id', Product.update)
// delete a product
router.delete('/product/:id', Product.delete)


export default router