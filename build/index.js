"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl_1 = require("repl");
const knex_1 = require("./server/database/knex");
const Server_1 = __importDefault(require("./server/Server"));
Server_1.default.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});
if (process.env.IS_LOCALHOST !== 'true') {
    console.log('Rodando migrations');
    knex_1.Knex.migrate
        .latest()
        .then(() => {
        knex_1.Knex.seed.run()
            .then(() => (0, repl_1.start)())
            .catch(console.log);
    })
        .catch(console.log);
}
else {
    (0, repl_1.start)();
}
