class ProductManager {
    constructor(){
        this.products=[
           
        ]
    }
 
    getProducts=()=>{
        return this.products
    }

    generateIds=()=>{
        const counter = this.products.length
        if(counter===0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }

    addProducts=(title,description,price,thumbnail,code,stock)=>{
            if(!title || !description || !price || !thumbnail || !code || !stock){
                console.error("Ingrese todos los datos del product")
                return
        } 

    else{
                
    const productfiltrado= this.products.find(element=>element.code==code)  
    const id=this.generateIds();
       if (!productfiltrado){
        const newproduct={
              id,
             title,
             description,
              price,
              thumbnail,
              code,
              stock
        }
        return this.products.push(newproduct)
           }

           else{
            console.error("El codigo del producto ya existe")
           }
        
        }
    }
  
    
    getProdudctById=(id)=>{
        const productencontrado=this.products.find(element=>element.id==id)
        if (!productencontrado)
        {
          console.error("NOT FOUND")
          return
        }
  
        else{
          return productencontrado
        }
      }
    }
    const productmanager = new ProductManager();
    productmanager.addProducts("producto1","descripcion1","12","url","code1",400)
    productmanager.addProducts("producto2","descripcion2","15","url","code1",300)
    productmanager.addProducts("producto3","descripcion3","24","url","code1",500)
    productmanager.addProducts("producto4","descripcion4","34","url","code1",600)
    productmanager.addProducts("producto5","descripcion5","15","url","code1",200)
    productmanager.addProducts("producto6","descripcion6","22","url","code1",100)
