const socketClient=io()



socketClient.on("enviodeproducts", (obj)=>{
    updateproducts(obj)
})