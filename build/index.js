"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Se utiliza el middleware cuya función es transformar el req.body a json
app.use(express_1.default.json());
// Pasar esta variable a una variable de entorno
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!!');
    res.send('You are in ping page');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
