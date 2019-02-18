"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = __importDefault(require("../controllers/chatController"));
class ChatRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', chatController_1.default.list);
        this.router.get('/:id', chatController_1.default.getOne);
        this.router.post('/', chatController_1.default.create);
        this.router.delete('/:id', chatController_1.default.delete);
        this.router.put('/:id', chatController_1.default.update);
    }
}
const chatRoutes = new ChatRoutes();
exports.default = chatRoutes.router;
