var express = require('express')
var bodyparser = require('body-parser')
var morgan = require('morgan')


var app = express();


//console.log('app.use', app.use)
app.use(express.static(__dirname+'/client'))

app.get('/',function(req,res){
  console.log('inside')
  //console.log(__dirname+'/client')

})

app.listen(process.env.PORT || 3000,function(){
  console.log('Server is running on port 3000 (Bitch boy)')
});
