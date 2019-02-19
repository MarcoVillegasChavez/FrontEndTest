import { Request, Response } from 'express';
import pool from '../database';

class ChatController {

    public async list(req: Request, res: Response) {
        const {id} = req.params;
        const games = await pool.query(' SELECT * FROM Chats WHERE idChat = ? ', [id]);
        res.json(games);
        console.log(games);
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query(' SELECT * FROM Chats WHERE idChat = ? ', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Chat doesn't exists" });
    }
    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await pool.query('INSERT INTO Chats SET ?', [req.body]);
            res.json({ message: 'Chat saved' });
        } catch (err) {
            console.log(err);
            res.status(501).json({ message: err });
        }
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Chats WHERE idChat = ?', [id]);
        res.json({ message: 'The Chat was deleted' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Chats SET ? WHERE idChat = ?', [req.body, id]);
        res.json({ message: 'The Chat was updated' })
    }
}
const chatController = new ChatController();
export default chatController;