import { Router } from 'express'
import chatController from '../controllers/chatController'

class ChatRoutes  {
    public  router: Router = Router();
    constructor(){
        this.config();        
    }
    config(): void {
        this.router.get('/:id', chatController.list);
        this.router.get('/', chatController.getOne);
        this.router.post('/', chatController.create);
        this.router.delete('/:id', chatController.delete);
        this.router.put('/:id', chatController.update)
    }
    
}
const chatRoutes =  new ChatRoutes();
export default chatRoutes.router;
