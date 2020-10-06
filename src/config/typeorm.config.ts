import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//import * as config from 'config';

//const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mongodb",
    host: 'localhost',
    port: 27017,
   // authSource: "admin",
    //username: 'root2',
    //password: 'password',
    useUnifiedTopology: true,
    database: 'nestjs-rest-api-2',
    useNewUrlParser: true,
    entities: [
        __dirname + '/../**/*.entity.{ts,js}',
      //  __dirname + '/../../*.entity.{ts,js}'
    ],
    synchronize: true
}