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
exports.seed = exports.ETableNames = void 0;
const _0000_insert_cidades_1 = require("./0000_insert_cidades");
var ETableNames;
(function (ETableNames) {
    ETableNames["cidade"] = "cidade";
    ETableNames["pessoa"] = "pessoa";
    ETableNames["usuario"] = "usuario";
})(ETableNames || (exports.ETableNames = ETableNames = {}));
const seed = (knex) => __awaiter(void 0, void 0, void 0, function* () {
    yield knex(ETableNames.cidade).del();
    yield knex(ETableNames.cidade).insert(_0000_insert_cidades_1.cidadesBrasil.map(nome => ({ nome })));
});
exports.seed = seed;
