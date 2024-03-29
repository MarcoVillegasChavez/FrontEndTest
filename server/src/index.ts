import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { urlencoded } from 'body-parser';


import chatRoomRoutes from './routes/chatRoomRoutes'
import chatRoutes from './routes/chatRoutes'
import usuarioRoutes from './routes/usuarioRoutes'
import usuarioChatRoutes from './routes/usuariosChatRoutes'


class Server{
    public app: Application;
    constructor(){
        //Se inicializa expres para acceder a las rutas
        this.app = express();
        this.config();
        this.routes();
    }
    //Se declara el uso de morgan, cors y las respuestas json, 
    //   tambien se declara urlencoded, por si se llegara a utilizar algun formulario
    config(): void {
        //se configura el puerto
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
    }
    routes(): void {
        //Se declaran todas las rutas que se van a utilizar
        this.app.use('/api/ChatRoom', chatRoomRoutes);
        this.app.use('/api/Chat', chatRoutes);
        this.app.use('/api/Usuario', usuarioRoutes);
        this.app.use('/api/UsuarioChats', usuarioChatRoutes);
    }
    //Se inicializa el servidor.
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        })
    }
}
const server = new Server();
server.start();