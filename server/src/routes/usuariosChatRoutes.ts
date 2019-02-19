import { Router } from 'express'
import usuariosChatController from '../controllers/usuariosChatController'

class UsuariosChatRoutes  {
    public  router: Router = Router();
    constructor(){
        this.config();        
    }
    config(): void {
        this.router.get('/:id', usuariosChatController.list);
        this.router.get('/getOne/:id', usuariosChatController.getOne);
        this.router.post('/', usuariosChatController.create);
        this.router.delete('/:id', usuariosChatController.delete);
        this.router.put('/:id', usuariosChatController.update)
    }
    
}
const usuariosChatRoutes =  new UsuariosChatRoutes();
export default usuariosChatRoutes.router;
