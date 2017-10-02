var app = require('./config/server');

var server = app.listen(8080, function(){
    console.log('Server ON');
});