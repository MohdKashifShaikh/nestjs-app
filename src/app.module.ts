import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    CustomerModule,
    ConfigModule.forRoot({
      // ConfigModule is for env variable
      isGlobal: true, //will allow to use the env's globally
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    StudentController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabaseController,
    EvController,
  ],
  providers: [
    AppService,
    UserService,
    ProductService,
    StudentService,
    DatabaseService,
    EvService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
