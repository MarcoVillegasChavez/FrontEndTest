"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.default.list);
        this.router.get('/:id', usuarioController_1.default.getOne);
        this.router.post('/', usuarioController_1.default.create);
        this.router.delete('/:id', usuarioController_1.default.delete);
        this.router.put('/:id', usuarioController_1.default.update);
        //Esta ruta permite la autenticacion del usuario.
        this.router.post('/AutenticarUsuario', usuarioController_1.default.authenticate);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
