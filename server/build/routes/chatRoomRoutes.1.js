"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatRoomController_1 = __importDefault(require("../controllers/chatRoomController"));
class ChatRoomRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', chatRoomController_1.default.list);
        this.router.get('/:id', chatRoomController_1.default.getOne);
        this.router.post('/', chatRoomController_1.default.create);
        this.router.delete('/:id', chatRoomController_1.default.delete);
        this.router.put('/:id', chatRoomController_1.default.update);
    }
}
const chatRoomRoutes = new ChatRoomRoutes();
exports.default = chatRoomRoutes.router;
