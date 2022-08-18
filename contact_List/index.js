const express=require('express')
const path =require('path')
const port=8000


const app=express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views_Pk'))


app.get('/',function(req,res){
    // console.log(req)
    // console.log(__dirname)
    // res.send('<h1>I am going to be happy</h1>')
    return res.render('home',{name:"PK"})
})




app.listen(port,function(err){
    if(err){
        console.log('Error',err)
    return ;
    }
    console.log('Yup')
})