"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/gemes' });
    }
}
exports.indexController = new IndexController();
