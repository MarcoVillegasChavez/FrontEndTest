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
        this.router.get('/:id', usuariosChatController_1.default.list);
        this.router.get('/getOne/:id', usuariosChatController_1.default.getOne);
        this.router.post('/', usuariosChatController_1.default.create);
        this.router.delete('/:id', usuariosChatController_1.default.delete);
        this.router.put('/:id', usuariosChatController_1.default.update);
    }
}
const usuariosChatRoutes = new UsuariosChatRoutes();
exports.default = usuariosChatRoutes.router;
