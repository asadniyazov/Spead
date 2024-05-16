 import express from 'express'
 import cors from 'cors'
 import mongoose from 'mongoose'

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const newsSchema = new mongoose.Schema({
    name: String,
    price:Number,
    des:String,
  });
  const NewsModel = mongoose.model('News', newsSchema);
app.get('/news', async (req, res) => {
  const news= await NewsModel.find() 
  res.send(news)
})
app.get('/news/:id', async (req, res) => {
    const {id}=req.params
    const news= await NewsModel.findById(id) 
    res.send(news)
  })
  app.delete('/news/:id', async (req, res) => {
    const {id}=req.params
    const news= await NewsModel.findByIdAndDelete(id) 
    res.send({message:"delete olundu"})
  })
  app.put('/news/:id', async (req, res) => {
    const {id}=req.params
    const body= req.body 
    const news= await NewsModel.findByIdAndUpdate(id,body) 
    res.send({message:"put olundu"})
  })
  app.post('/news', async (req, res) => {
 const body =req.body
    const news=  new NewsModel(body) 
    await news.save()
    res.send({message:"Post olundu"})
  })
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
.then(()=>console.log("Connected"))
.catch(()=>console.log("Not Connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})