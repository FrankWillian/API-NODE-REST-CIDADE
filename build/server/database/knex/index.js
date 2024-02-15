"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = __importDefault(require("knex"));
const Environment_1 = require("./Environment");
const getEnvironment = () => {
    switch (process.env.NODE_ENV) {
        case 'production': return Environment_1.production;
        case 'test': return Environment_1.test;
        default: return Environment_1.development;
    }
};
exports.Knex = (0, knex_1.default)(getEnvironment());
