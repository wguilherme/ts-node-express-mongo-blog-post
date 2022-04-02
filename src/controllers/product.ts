// init a empty array of products
const products: any = []

// simulate id, init in 0
let id = 0;

const productControllers = {

  // list products
  index(req, res) {
    res.status(200).json({ status: 'success', data: { products } })
  },

  // create a new product
  create(req, res) {
    // sums 1 to id
    id++

    // get the body of the request and organize as a new product
    const product = {
      id, name: req.body.name, price: req.body.price
    }
    products.push(product)
    console.log('products', products)
    res.status(200).json({ status: 'success', message: 'Product created' })
  },
  // update a product 
  update(req, res) {
    const { id } = req.params
    const { name, price } = req.body
    const product = products.find(product => product.id == id)
    if (product) {
      product.name = name
      product.price = price
    }

    console.log('products', products)
    res.status(200).json({ status: 'success', message: 'Product updated' })
  },
  // delete a product 
  delete(req, res) {
    const { id } = req.params
    const product = products.find(product => product.id == id)
    if (product) {
      products.splice(products.indexOf(product), 1)
    }
    console.log(products)
    res.status(200).json({ status: 'success', message: 'Product deleted' })
  }
}

export default productControllers;