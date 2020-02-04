import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TaskRepositoryMongo from 'src/infraestructure/adapters/repository/task.repository.mongo';
import TaskSchema from 'src/infraestructure/adapters/repository/schema/task.schema';
import { DomainModule } from 'src/domain/domain.module';
import GetAllTasksUseCase from './useCases/getAllTasks.usecase';
import CreateTaskUseCase from './useCases/createTask.usecase';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [
    GetAllTasksUseCase,
    CreateTaskUseCase,
    {
      provide: 'TaskRepository',
      useClass: TaskRepositoryMongo,
    },
  ],
  exports: [GetAllTasksUseCase, CreateTaskUseCase],
})
export class ApplicationModule {}
