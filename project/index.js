// mongodb://localhost/my_database

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const newUserConroller = require('./controllers/newUser')

const storeUserController = require('./controllers/storeUser')

// const validateMiddleWare = require("./middleware/validationMiddleware");

const express = require('express')
const app = new express()
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_databse', {useNewUrlParser:true})

const fileUpload = require('express-fileupload')
const { append } = require('express/lib/response')

const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}

// const validateMiddleWare = (req, res, next) => {
//     if(req.files == null || req.body.title == null || req.body.body == null) {
//         return res.redirect('/posts/new')
//     }
//     next()
// }

app.use(customMiddleWare)

// app.use('/posts/store', validateMiddleWare)

app.use(fileUpload())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.post('/post/store', (req,res)=>{
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, 'public/img',image.name), async (error) =>{
//         await BlogPost.create({...req.body, image:'/img/' + image.name})
//         res.redirect('/')
//     })
// })

// app.post('/post/store', async (req,res)=>{
//     await BlogPost.create(req.body)
//     res.redirect('/')
// })

app.listen(4000, () =>{
    console.log('App listening on port 4000')
})


// app.get('/post/:id', async (req,res)=>{
//     const blogpost = await BlogPost.findById(req.params.id)
//     res.render('post',{
//         blogpost
//     })
// })

app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)

app.get('/posts/new', newPostController)

app.get('/auth/register', newUserConroller)

app.post('/users/register', storeUserController)