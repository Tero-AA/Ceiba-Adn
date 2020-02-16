import { Module, DynamicModule } from '@nestjs/common';
import TaskController from './controllers/task.controller';
import { ApplicationModule } from '../application/application.module';
import { MongooseModule } from '@nestjs/mongoose';
import TaskSchema from './adapters/repository/schema/task.schema';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';

const db_uri = 'MONGO_SERVER_URL';
const db_port = 'MONGO_SERVER_PORT';
const db_name = 'MONGO_SERVER_DBNAME';

@Module({})
export default class InfrastructureModule {
  static foorRoot(setting: any): DynamicModule {
    return {
      module: InfrastructureModule,
      imports: [
        ApplicationModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: `mongodb://${configService.get(db_uri)}:${setting.port ||
              configService.get(db_port)}/${configService.get(db_name)}`,
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([{ name: 'Cost', schema: TaskSchema }]),
      ],
      controllers: [TaskController],
    };
  }
}
