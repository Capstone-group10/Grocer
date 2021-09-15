let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");


let url = "mongodb://priyansh1104:Admin_123@grocer-shard-00-00.qnzrp.mongodb.net:27017,grocer-shard-00-01.qnzrp.mongodb.net:27017,grocer-shard-00-02.qnzrp.mongodb.net:27017/Grocer?ssl=true&replicaSet=atlas-cyntnq-shard-0&authSource=admin&retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors);


const mongooseDboption = {
    useNewUrlParse : true,
    useUnifiedTopology : true

}

mongoose.connect(url, mongooseDboption);

mongoose.connection

var User = require("./router/user.router");
var Employee = require("./router/user.router");



app.use("/employee", Employee);
app.use("/user", User);


app.listen(9090 , () => console.log("Server is listening on port number 9090"));