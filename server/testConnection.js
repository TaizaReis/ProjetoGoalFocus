const { Client } = require('pg');

const client = new Client({
  user: 'GoalFocus',
  host: 'localhost',
  database: 'GoalFocus',
  password: '1234', // ajuste conforme necessário
  port: 5433,
});

client.connect()
  .then(() => console.log('Conexão bem-sucedida!'))
  .catch(err => console.error('Erro na conexão', err))
  .finally(() => client.end());

