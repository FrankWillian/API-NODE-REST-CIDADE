import { start } from 'repl';
import { Knex } from './server/database/knex';
import server from './server/Server';

server.listen(process.env.PORT || 3333, () => {
  console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});

if (process.env.IS_LOCALHOST !== 'true') {
  console.log('Rodando migrations');

  Knex.migrate
  .latest()
  .then(() => {
    Knex.seed.run()
    .then(() => start())
    .catch(console.log);
  })
  .catch(console.log);
} else {
  start();
}



