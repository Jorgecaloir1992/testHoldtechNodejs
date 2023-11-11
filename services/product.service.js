class ProductsService {

  constructor(){
    this.products = [];
  }

  create(data) {
    const newProduct = {
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

}

module.exports = ProductsService;
