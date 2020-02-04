import { Module } from '@nestjs/common';
import TaskController from './controllers/task.controller';
import { ApplicationModule } from 'src/application/application.module';
import { MongooseModule } from '@nestjs/mongoose';
import TaskSchema from './adapters/repository/schema/task.schema';

@Module({
  imports: [
    ApplicationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/tasks'),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TaskController],
})
export class InfrastructureModule {}
