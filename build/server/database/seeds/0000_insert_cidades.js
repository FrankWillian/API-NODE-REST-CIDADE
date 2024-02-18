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
exports.seed = exports.cidadesBrasil = void 0;
const ETableNames_1 = require("./ETableNames");
exports.cidadesBrasil = [
    "Acrelândia",
    "Assis Brasil",
    "Brasiléia",
    "Bujari",
    "Capixaba",
    "Cruzeiro do Sul",
    "Epitaciolândia",
    "Feijó",
    "Jordão",
    "Mâncio Lima",
    "Manoel Urbano",
    "Marechal Thaumaturgo",
    "Plácido de Castro",
    "Porto Acre",
    "Porto Walter",
    "Rio Branco",
    "Rodrigues Alves",
    "Santa Rosa do Purus",
    "Sena Madureira",
    "Senador Guiomard",
    "Tarauacá",
    "Xapuri"
];
const seed = (knex) => __awaiter(void 0, void 0, void 0, function* () {
    const [{ count }] = yield knex(ETableNames_1.ETableNames.cidade).count('* as count');
    if (!Number.isInteger(count) || Number(count) > 0)
        return;
    yield knex(ETableNames_1.ETableNames.cidade).insert(exports.cidadesBrasil.map(nome => ({ nome })));
});
exports.seed = seed;
