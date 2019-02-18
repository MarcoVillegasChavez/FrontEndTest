import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { urlencoded } from 'body-parser';


import chatRoomRoutes from './routes/chatRoomRoutes'
import chatRoutes from './routes/chatRoutes'
import usuarioRoutes from './routes/usuarioRoutes'


class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
    }
    routes(): void {
        
        this.app.use('/api/ChatRoom', chatRoomRoutes);
        this.app.use('/api/Chat', chatRoutes);
        this.app.use('/api/Usuario', usuarioRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        })
    }
}
const server = new Server();
server.start();