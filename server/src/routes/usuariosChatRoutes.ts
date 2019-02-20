import { Router } from 'express'
import usuariosChatController from '../controllers/usuariosChatController'

class UsuariosChatRoutes  {
    public  router: Router = Router();
    constructor(){
        this.config();        
    }
    config(): void {
        //Ruta para mandar a llamar la lista de usuarios y chats corresponsientes a un id.
        this.router.get('/:id', usuariosChatController.list);
        //Ruta para mandar a llamar unicamente un id.
        this.router.get('/getOne/:id', usuariosChatController.getOne);
        //Ruta para agregar un nuevo registro de usuarios y chats
        this.router.post('/', usuariosChatController.create);
        //Para eliminar todos los usuarios pertenecientes a un chat
        this.router.delete('/:id', usuariosChatController.delete);
        //Para modificar los usuarios y su chat.
        this.router.put('/:id', usuariosChatController.update)
    }
    
}
const usuariosChatRoutes =  new UsuariosChatRoutes();
export default usuariosChatRoutes.router;
