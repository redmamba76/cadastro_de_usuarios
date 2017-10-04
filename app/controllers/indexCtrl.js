module.exports.index = function (application, req, res) {
    res.render('index', { validacao: {} });
}

module.exports.autenticar = function (application, req, res) {
    let dadosForm = req.body;

    req.assert('email', 'Oops, você esquece o email').notEmpty();
    req.assert('senha', 'Oops, você esquece a senha').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('index', { validacao: errors });
        return;
    }

    var connection = application.config.dbConnection;
    var usuarioDao = new application.app.models.UsuarioDao(connection);

    UsuarioDao.autenticar(dadosForm, req, res);
}