module.exports = function (app) {
    app.get('/', function (req, res) {
        app.app.controllers.indexCtrl.index(app, req, res);
    });

    app.post('/autenticar', function (req, res) {
        app.app.controllers.indexCtrl.autenticar(app, req, res);
    });
}