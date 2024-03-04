interface FrontProps {
  frontUrl: string;
  httpTimeout: number;
}

interface MongodbConfigProps {
  connectionString: string;
  databaseName: string;
}

export interface ConfigProps {
  port: number;
  api: FrontProps;
  mongodb: {
    database: MongodbConfigProps;
  };
}
