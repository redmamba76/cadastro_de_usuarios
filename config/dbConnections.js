var mongo = require('mongodb');

var connMongoDb = function(){
    console.log('Server ON');

    var db = new mongo.Db(
        'cadastro_de_usuarios',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );
    return db;
}

module.exports = function(){
    return connMongoDb;
}