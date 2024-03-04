import { ConfigProps } from 'src/interfaces/config.interfaces';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  api: {
    frontUrl: process.env.FRONT_URL,
    httpTimeout: 1000,
  },
  mongodb: {
    database: {
      connectionString: process.env.DB_URI || 'mongodb://localhost:27017',
      databaseName: process.env.NODE_ENV || 'local',
    },
  },
});
