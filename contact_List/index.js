const express=require('express')
const bodyParser = require('body-parser');
const path =require('path')
const port=8000


const app=express()


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views_Pk'))

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded())

var contactList=[
    {
        name:"Parth",
        phone:"100"
    },
    {
        name:"Police",
        phone:"911"
    },
    {
        name:"Captain America",
        phone:"14214515212152"
    }


]
app.get('/',function(req,res){
    return res.render('home',{
        name:"Contact List",
        contact_list:contactList,
    })
})

app.get('/play',function(req,res){
    return res.render('practice',{
        title:"Play with ejs"
    })
})



app.post('/create',function(req,res){
//    return res.redirect('/play')
// console.log(req.body)
})
app.listen(port,function(err){
    if(err){
        console.log('Error',err)
    return ;
    }
    console.log('Yup')
})