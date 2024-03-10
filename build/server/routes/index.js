"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const usuarios_1 = require("../controllers/usuarios");
const middlewares_1 = require("../shared/middlewares");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.send(200);
});
router.get('/cidades', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.getAllValidation, controllers_1.CidadesController.getAll);
router.get('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById);
router.put('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.updateByIdValidation, controllers_1.CidadesController.updateById);
router.post('/cidades', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create);
router.delete('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.deleteValidation, controllers_1.CidadesController.deleteById);
router.get('/pessoas', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.getAllValidation, controllers_1.PessoasController.getAll);
router.get('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.getByIdValidation, controllers_1.PessoasController.getById);
router.put('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.updateByIdValidation, controllers_1.PessoasController.updateById);
router.post('/pessoas', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.createValidation, controllers_1.PessoasController.create);
router.delete('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.deleteValidation, controllers_1.PessoasController.deleteById);
router.post('/entrar', usuarios_1.UsuariosController.signInValidation, usuarios_1.UsuariosController.signIn);
router.post('/cadastrar', usuarios_1.UsuariosController.signUpValidation, usuarios_1.UsuariosController.signUp);
