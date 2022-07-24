"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routers_1.default);
app.listen(3333, 'localhost', function () {
    console.log("Server runding in localhost:3333");
});
