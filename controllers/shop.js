const Product = require('../model/product');
const Cart = require('../model/cart')
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
 Product.findById(prodId, product=>{
 res.render('shop/product-detail', {
  product: product,
  pageTitle: 'Product',
  path: '/products'
})
})}

// exports.getProductDetails = (req, res, next) => {
//   Product.findById(product => {
//     res.render('shop/product-details', {
//       prods: product,
//       pageTitle: 'Product',
//       path: '/product-details'
//     });
//   });
// };
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart =(req,res,next) =>{
  const prodId = req.body.productId
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price)
  })
  res.redirect('/cart')
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
