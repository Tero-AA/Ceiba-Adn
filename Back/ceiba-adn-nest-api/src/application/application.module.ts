import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TaskRepositoryMongo from 'src/infraestructure/adapters/repository/task.repository.mongo';
import TaskSchema from 'src/infraestructure/adapters/repository/schema/task.schema';
import { DomainModule } from 'src/domain/domain.module';
import GetAllTasksUseCase from './useCases/getAllTasks.usecase';
import CreateTaskUseCase from './useCases/createTask.usecase';
import DeleteTaskUseCase from './useCases/deleteTask.usecase';
import GetTaskUseCase from './useCases/getTask.usecase';
import UpdateTaskUseCase from './useCases/updateTask.usecase';
import { TaskService } from 'src/domain/services/task.service';
import { TaskRepository } from '../domain/ports/task.repository';

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
    DeleteTaskUseCase,
    GetTaskUseCase,
    UpdateTaskUseCase,
    {
      provide: 'TaskService',
      useClass: TaskService,
    },
    {
      provide: 'TaskRepository',
      useClass: TaskRepositoryMongo,
    },
  ],
  exports: [
    GetAllTasksUseCase,
    CreateTaskUseCase,
    DeleteTaskUseCase,
    GetTaskUseCase,
    UpdateTaskUseCase,
  ],
})
export class ApplicationModule {}
