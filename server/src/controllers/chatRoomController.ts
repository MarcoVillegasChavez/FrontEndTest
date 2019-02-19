import { Request, Response } from 'express';
import pool from '../database';

class ChatRoomController {

    public async list(req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ChatRoom WHERE idChat = ? ', [id]);
        res.json(games);
        console.log(games);
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ChatRoom WHERE IdChatRoom = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The comment doesn't exists" });
    }
    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await pool.query('INSERT INTO ChatRoom SET ?', [req.body]);
            res.json({ message: 'Comment saved' });
        } catch (err) {
            console.log(err);
            res.status(501).json({ message: err });
        }
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ChatRoom WHERE IdChatRoom = ?', [id]);
        res.json({ message: 'The comment was deleted' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ChatRoom SET ? WHERE IdChatRoom = ?', [req.body, id]);
        res.json({ message: 'The comment was updated' })
    }
}
const chatRoomController = new ChatRoomController();
export default chatRoomController;