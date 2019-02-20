"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosChatController_1 = __importDefault(require("../controllers/usuariosChatController"));
class UsuariosChatRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta para mandar a llamar la lista de usuarios y chats corresponsientes a un id.
        this.router.get('/:id', usuariosChatController_1.default.list);
        //Ruta para mandar a llamar unicamente un id.
        this.router.get('/getOne/:id', usuariosChatController_1.default.getOne);
        //Ruta para agregar un nuevo registro de usuarios y chats
        this.router.post('/', usuariosChatController_1.default.create);
        //Para eliminar todos los usuarios pertenecientes a un chat
        this.router.delete('/:id', usuariosChatController_1.default.delete);
        //Para modificar los usuarios y su chat.
        this.router.put('/:id', usuariosChatController_1.default.update);
    }
}
const usuariosChatRoutes = new UsuariosChatRoutes();
exports.default = usuariosChatRoutes.router;
