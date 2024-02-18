"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAll = void 0;
const ETableNames_1 = require("../../seeds/ETableNames");
const knex_1 = require("../../knex");
const GetAll = (page, limit, filter, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .select('*')
            .offset((page - 1) * limit)
            .limit(limit);
        if (id > 0) {
            query = query.where('id', '=', id);
        }
        else if (filter) {
            query = query.where('nome', 'like', `%${filter}%`);
        }
        const result = yield query;
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar registro');
    }
});
exports.GetAll = GetAll;
