


const express = require("express");
const bodyPárser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let usuario = {
    nombre:'', 
    apellido:''
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

app.get('/', function(req, res){
    respuesta = {
        error:  true,
        codigo: 200,
        mensaje :   'Punto de inicio'
    };
    res.send(respuesta);
});

app.route('/usuario')
    .get(function(req,   res){
        respuesta = {
            error:  false,
            codigo: 200,
            mensaje:    ''
        };
        if(usuario.nombre === '' || usuario.apellido ==='') {
            respuesta = {
                error:  true,
                codigo: 501,
                mensaje:'el usuario no ha sido creado'
            };
        } else {
            respuesta = {
                error:  false,
                codigo: 200,
                mensaje: 'respuesta del usuario',
                respuesta:usuario
            };
        }
        res.send(respuesta);
    })
    .post(function(req,res) {
        if(!req.body.nombre || !req.body.apellido)  {
            respuesta = {
                error: true,
                codigo: 502,
                mensaje: 'el campo nombre y apellido son requeridos'
            };
        }  else {
            if(usuario.nombre !== '' || usuario.apellido !== '') {
                respuesta = {
                    error: true,
                    codigo: 503,
                    mensaje:'usuario ya creado anteriormente'
                };
            }  else {
                usuario = {
                    nombre : req.body.nombre,
                    apellido: req.body.apellido
                };
                respuesta = {
                    error:false,
                    codigo: 200,
                    mensaje: 'usuario creado',
                    respuesta : usuario
                };
            } 
        }

    res.send(respuesta);
})
.put(function (req, res){
    if(!req.body.nombre || !req.body.apellido) {
        respuesta _= {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y apellido son requeridos'
        };
    } else {
        if(usuario.nombre === '' || usuario.apellido === '') {
            respuesta = {
             error: true,
             codigo: 501,
             mensaje: 'El usuario no ha sido creado'
    };
}   else {
    usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    respuesta = {
        error:false,
        codigo: 200,
        mensaje : 'usuario actualizado',
        respuesta : usuario
    };
   }
  }

res.send(respuesta);
})
.delete(function (req, res ){
    if(usuario.nombre === '' || nombre.apellido === ''){
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'usuario eliminado'
        };
        usuario = {
            nombre: '',
            apellido: ''
        };
    }
    res.send(respuesta);
});

app.use(function(req,   res,    next){
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: ' url no encontrada'
    };
    res.status(404).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializando en el puerto 3000");
});

