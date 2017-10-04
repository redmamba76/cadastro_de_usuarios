module.exports = function (application) {
    application.get('/cadastrar', function (req, res) {
        application.app.controllers.cadastroCtrl.cadastrar(application, req, res);
    });  
    
    application.post('/cadastro', function (req, res) {
        application.app.controllers.cadastroCtrl.cadastro(application, req, res);
    });
}