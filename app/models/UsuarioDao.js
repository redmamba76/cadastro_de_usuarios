var crypto = require('crypto');

function UsuarioDao(connection) {
    this._connection = connection();
}

UsuarioDao.prototype.adicionarUsuario = function (usuario) {
    this._connection.open(function (error, mongoclient) {
        mongoclient.collection("usuarios", function (error, collection) {
            collection.insert(usuario);
            collection.close();
        });
    });
}

UsuarioDao.prototype.verificaUsuario = function (usuario, req, res) {
    if (usuario == undefined) return res.usrError = {
        error: "Houve um problema de comunicação tente novalmente"
    };
    let email = this._connection.open(function (error, mongoclient) {
        mongoclient.collection("usuarios", function (error, collection) {
            collection.findOne({
                email: usuario.email
            });
            mongoclient.close();
        });
    });

    if (email) {
        return res.userExists = true;;
    }
    this.adicionarUsuario(usuario);
}

UsuarioDao.prototype.atualizaUsuario = function (usuario, req, res) {
    if (usuario == undefined) return res.usrError = {
        error: "Houve um problema de comunicação tente novalmente"
    }

    this._connection.open(function (error, mongoclient) {
        mongoclient.collection("usuarios", function (error, collection) {
            collection.findOneAndUpdate(usuarion._id, usuario);
            res.render('cadastro?msg=a');
            mongoclient.close();
        });
    });
}

UsuarioDao.prototype.autenticar = function (usuario, req, res) {
    this._connection.open(function (error, mongoclient) {
        mongoclient.collection('usuarios', function (erro, collection) {
            let senhaCriptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
            usuario.senha = senhaCriptografada;
            collection.findOne(usuario).toArray(function (error, result) {
                if (result[0] != undefined) {
                    
                }
            });
        });
    });
}