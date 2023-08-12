const express=require("express")
const dotenv=require('dotenv')
const colors=require('colors')
const connectDB=require('./config/db')



//Routes
const categoryRoutes=require('./routes/categoryRoutes')
const problemRoutes=require('./routes/problemRoutes')


const app=express()
dotenv.config()
connectDB()
app.use(express.json())


//routes middleware


app.use('/api/category',categoryRoutes)
app.use('/api/problem',problemRoutes)

const port=process.env.PORT||5000
app.listen(port,console.log(`server is running at ${port}`))