module.exports = function (application) {
    application.get('/cadastro', function (application, req, res) {
        application.app.controllers.cadastroCtrl.cadastro(application, req, res);
    });

    application.post('/cadastrar', function (application, req, res) {
        application.app.controllers.cadastroCtrl.cadastrar(application, req, res);
    });

}