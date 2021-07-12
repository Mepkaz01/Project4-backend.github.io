const express=require('express')
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
  }

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors(corsOptions))
app.use(bodyParser.json());


app.use('/auth', routes.auth);
app.use('/user', routes.user);
app.use('/post', routes.post);
app.use('/admin', routes.admin);
app.use('/favorite', routes.favorite);



app.listen(3001, ()=>{console.log(" I am listening at port 3001")})