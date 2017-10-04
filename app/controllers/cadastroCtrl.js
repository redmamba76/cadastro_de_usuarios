module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {} });
}

module.exports.cadastrar = function (application, req, res) {
    console.log('rota cadastro');
    let dadosForm = req.body;

    req.assert('nome', 'O campo nome está vazio!').notEmpty();
    req.assert('sobrenome', 'O campo sobrenome está vazio!').notEmpty();
    req.assert('email', 'O campo email está vazio!').notEmpty();
    req.assert('senha', 'Você esqueceu de colocar uma senha de acesso!').notEmpty();
    req.assert('confirmacao_senha', 'Você precisa confirmar sua senha').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        console.log('entrou no if');
        res.render('cadastro', { validacao: errors });
        return;
    }

    let senha = dadosForm.senha;
    let confSenha = dadosForm.confirmacao_senha;

    if (senha == confSenha) {
        let connection = application.config.dbConnection;
        let usuarioDao = new application.app.models.UsuarioDao(connection);
        usuarioDao.verificaUsuario(application, req, res);
    }
}//