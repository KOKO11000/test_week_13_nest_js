import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Items } from './items.model';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: [SequelizeModule.forFeature([Items])],
    controllers: [ItemsController],
    providers: [ItemsService],
    exports: [ItemsService]
})
export class ItemsModule { }
