import { Router } from 'express'
import chatRoomController from '../controllers/chatRoomController'

class ChatRoomRoutes  {
    public  router: Router = Router();
    constructor(){
        this.config();        
    }
    config(): void {
        this.router.get('/', chatRoomController.list);
        this.router.get('/:id', chatRoomController.getOne);
        this.router.post('/', chatRoomController.create);
        this.router.delete('/:id', chatRoomController.delete);
        this.router.put('/:id', chatRoomController.update)
    }
    
}
const chatRoomRoutes =  new ChatRoomRoutes();
export default chatRoomRoutes.router;
