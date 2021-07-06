var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var session = require("cookie-session");
var auth = require('./apps/middlewares/auth');

var app = express();
//body parser
app.use(express.json());

app.set("views", __dirname + "/apps/views");
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({
    extended: true,
}));

var sess = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
    //check login
app.use(auth);

//static folder
app.use("/static", express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var port = process.env.PORT;

app.listen(port, () => console.log(`Server listening on port ${port}`));