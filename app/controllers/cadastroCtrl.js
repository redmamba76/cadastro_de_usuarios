module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {} });
}

module.exports.cadastrar = function (application, req, res) {
    let dadosForm = req.body;

    req.assert();
}