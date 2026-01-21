const { resolve } = require('path');
require('dotenv').config();

const dialect = process.env.DB_DIALECT || 'sqlite';

module.exports = {
  dialect,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'escola_api',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  storage: resolve(__dirname, '..', '..', 'db.sqlite'),
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  // SQLite não suporta timezone customizada
  ...(dialect !== 'sqlite' && {
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
  }),
};
