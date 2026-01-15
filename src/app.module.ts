import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: "12345678",
      database: "items",
      autoLoadModels: true,
      synchronize: true,
    }),
    ItemsModule
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
