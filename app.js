const app1=require("express")
const music=require("sound-play")
var bodyParser = require("body-parser")
var app=app1()
app.set("view engine","ejs");
app.use(app1.static('public'));
app.use(bodyParser.urlencoded({extended:true})) 
var i=[];
var j=[];
app.listen(3000,function(req,res){
   console.log("The alarm clock is running my friend");
})

app.get("/",function(req,res){
   res.render("alarm", { ni:i,nh: j});
});

app.post("/",function(req,res){
   var a=req.body.h;
   i.push(a);
   var b=req.body.k;
   j.push(b);
   res.redirect("/");
});