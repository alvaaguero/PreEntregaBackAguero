import { Router } from "express";
import ProductManager from "../managers/productManager.js";
import { __dirname } from "../utils.js";
const pmanager=new ProductManager(__dirname+"/files/products.json")

const router = Router()


router.get("/", async(req,res)=>{
    const listadeproductos=await pmanager.getProducts({})
    res.render("Home",listadeproductos)
})


router.get("/realtimeproducts", (req,res)=>{
    res.render("realtimeproducts")
})


export default router