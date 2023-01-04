import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  config: ConfigService,
): Promise<MongooseModuleFactoryOptions> => ({
  uri: getMongoString(config),
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getMongoString = (config: ConfigService) =>
  'mongodb://' +
  config.get('MONGO_LOGIN') +
  ':' +
  config.get('MONGO_PASSWORD') +
  '@' +
  config.get('MONGO_HOST') +
  ':' +
  config.get('MONGO_PORT') +
  '/' +
  config.get('MONGO_AUTHDATABASE');
// config.get('MONGO_AUTHDATABASE') +
// '?directConnection=true';
