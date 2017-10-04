module.exports = function (application) {
    application.post('/cadastrar', function (req, res) {
        application.app.controllers.cadastroCtrl.cadastrar(application, req, res);
    });  
    
    application.get('/cadastro', function (req, res) {
        application.app.controllers.cadastroCtrl.cadastro(application, req, res);
    });
}