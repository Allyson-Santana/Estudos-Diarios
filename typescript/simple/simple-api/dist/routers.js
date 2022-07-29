"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = __importDefault(require("./controllers/userControllers"));
const routers = (0, express_1.Router)();
routers.get('/', (req, res) => res.status(200).send("OK"));
routers.get('/users', userControllers_1.default.index);
routers.get('/users', userControllers_1.default.create);
exports.default = routers;
