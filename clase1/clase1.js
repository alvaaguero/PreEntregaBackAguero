class ProductManager {
    constructor(){
        this.products=[ 
              
            ]
        }

        getProducts=()=>{
            return this.products

        }
        addProducts=(title,description,price,thumbnail,code,stock)=>{
            const newproduct={
                title,description,price,thumbnail,code,stock
            }
            return this.products.push(new products)
        }

    }

    const productmanager = new ProductManager();
    productmanager.addProducts("product1")
    console.log(productmanager.getProducts())