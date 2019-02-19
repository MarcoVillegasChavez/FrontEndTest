import { Request, Response } from 'express';
import pool from '../database';
import { promises } from 'fs';

class UsuarioController {

    public async list(req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM Usuarios');
        res.json(games);
        console.log(games);
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Usuarios WHERE IdUsuario = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "User doesn't exists" });
    }
    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await pool.query('INSERT INTO Usuarios SET ?', [req.body]);
            res.json({ message: 'User saved' });
        } catch (err) {
            console.log(err);
            res.status(501).json({ message: err });
        }
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Usuarios WHERE id = ?', [id]);
        res.json({ message: 'The User was deleted' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Usuarios SET ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'The User was updated' })
    }
    public async authenticate(req: Request, res: Response): Promise<void> {
        try {
            const authenticateUser = await pool.query('SELECT * FROM Usuarios WHERE Usuario = ? AND pass = ?', [req.body.Usuario, req.body.pass]);
            if(authenticateUser.length > 0){
                res.json({ message: 'User Authenticated' });
            }
            else{
                res.status(501).json({ message: 'User Or Password Incorrect' });
            }
        } catch (err) {
            res.status(501).json({ message: err });
        }
    }
}
const usuarioController = new UsuarioController();
export default usuarioController;