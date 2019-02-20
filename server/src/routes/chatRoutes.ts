import { Router } from 'express'
import chatController from '../controllers/chatController'

class ChatRoutes  {
    public  router: Router = Router();
    constructor(){
        this.config();        
    }
    config(): void {
        //Ruta que manda a llamar todos los chats pertenecientes a un usuario
        this.router.get('/:id', chatController.list);
        //Ruta que obtiene el ultimo registro creado.
        this.router.get('/', chatController.getOne);
        //Ruta que agrega un nuevo chat.
        this.router.post('/', chatController.create);
        //Elimina un chat
        this.router.delete('/:id', chatController.delete);
        //Modifica un chat.
        this.router.put('/:id', chatController.update)
    }
    
}
const chatRoutes =  new ChatRoutes();
export default chatRoutes.router;
