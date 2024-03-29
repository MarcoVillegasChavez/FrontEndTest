"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const chatRoomRoutes_1 = __importDefault(require("./routes/chatRoomRoutes"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const usuariosChatRoutes_1 = __importDefault(require("./routes/usuariosChatRoutes"));
class Server {
    constructor() {
        //Se inicializa expres para acceder a las rutas
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Se declara el uso de morgan, cors y las respuestas json, 
    //   tambien se declara urlencoded, por si se llegara a utilizar algun formulario
    config() {
        //se configura el puerto
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.urlencoded({ extended: false }));
    }
    routes() {
        //Se declaran todas las rutas que se van a utilizar
        this.app.use('/api/ChatRoom', chatRoomRoutes_1.default);
        this.app.use('/api/Chat', chatRoutes_1.default);
        this.app.use('/api/Usuario', usuarioRoutes_1.default);
        this.app.use('/api/UsuarioChats', usuariosChatRoutes_1.default);
    }
    //Se inicializa el servidor.
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
