const express=require('express')
const app=express()
const morgan= require('morgan')
const cors= require('cors')
const bodyparser=require('body-parser')

app.set('port',5000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extend:true}))
app.use(bodyparser.json())
app.use(cors({origin:true}))

app.use('/api',require('./routes/problemas_router'))


app.listen(process.env.PORT || 5000,()=>{
    console.log('Listen in the port ',process.env.PORT || 5000)
})


module.exports = app

