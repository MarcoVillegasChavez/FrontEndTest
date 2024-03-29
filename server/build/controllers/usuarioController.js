"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM Usuarios');
            res.json(games);
            console.log(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM Usuarios WHERE IdUsuario = ?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield database_1.default.query('INSERT INTO Usuarios SET ?', [req.body]);
                res.json({ message: 'User saved' });
            }
            catch (err) {
                console.log(err);
                res.status(501).json({ message: err });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Usuarios WHERE id = ?', [id]);
            res.json({ message: 'The User was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Usuarios SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The User was updated' });
        });
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authenticateUser = yield database_1.default.query('SELECT IdUsuario FROM Usuarios WHERE Usuario = ? AND pass = ?', [req.body.Usuario, req.body.pass]);
                if (authenticateUser.length > 0) {
                    res.json(authenticateUser[0]);
                }
                else {
                    res.status(501).json({ message: 'User Or Password Incorrect' });
                }
            }
            catch (err) {
                res.status(501).json({ message: err });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
