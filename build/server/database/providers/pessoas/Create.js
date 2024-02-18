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
exports.create = void 0;
const knex_1 = require("../../knex");
const ETableNames_1 = require("../../seeds/ETableNames");
const create = (pessoa) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [{ count }] = yield (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .where('id', '=', pessoa.cidadeId)
            .count('* as count');
        if (count === 0) {
            throw new Error('A cidade usada no cadastro não foi encontrada');
        }
        const [result] = yield (0, knex_1.Knex)(ETableNames_1.ETableNames.pessoa).insert(pessoa).returning('id');
        if (typeof result === 'number') {
            return result;
        }
        else {
            throw new Error('Erro ao inserir pessoa');
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Erro ao cadastrar o registro');
    }
});
exports.create = create;
