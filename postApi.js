require("./mongoose")
const customerModel = require("./customerSchema")
const cors=require("cors")

const express=require("express")
const app=express()

app.use(cors())
app.use(express.json())

app.post("/",async (req,resp)=>
{
    const data=await new customerModel(req.body)
    const result=await data.save()
    resp.send(result)
})

app.get("/", async(req,resp)=>{
    const data = await customerModel.find()
    resp.send(data)

 })

app.listen(5000)



