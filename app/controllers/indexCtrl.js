module.exports.index = function (app, req, res) {
    res.render('index', { validacao: {} });
}

module.exports.autenticar = function () {
    let dadosForm = req.body;

    req.assert('email', 'Oops, você esquece o <strong>email</strong>').notEmpty();
    req.assert('senha', 'Oops, você esquece a <strong>senha</strong>').notEmpty();

    let errors = req.validationErrors();

    if (errors) return res.render('index', { validacao: errors });

    let connection = app.config.dbConnection;
    let UsuarioDao = new app.app.models.UsuarioDao(connection);

    UsuarioDao.autenticar(dadosForm, req, res);
}

