const express = require('express')
const app = express()
const path = require("path")
const hbs = require("hbs")
require("./db/connection")
const User = require("./userschema")
const port = process.env.PORT || 3001

//setting the path
const staticpath = path.join(__dirname,"../public")
const templatepath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")


app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/j1',express.static(path.join(__dirname,"../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.set('view engine','hbs');
app.set("views",templatepath);
hbs.registerPartials(partialpath)



app.get('/', (req, res) => {
    res.render("index")
})

app.post('/contact', async (req, res) => {
    try {
        const userData = new User(req.body);
        console.log(req.body)
        await userData.save();
        res.status(201).render("index")
        
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(port, () => console.log(` app listening on port ${port}!`))