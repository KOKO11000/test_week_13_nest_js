import { Body, Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDto } from './items.dto';
import { Items } from './items.model';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }
   
        @Post()
        async createItem(@Body() body:ItemDto):Promise<Items>{
            return this.itemService.addNewItem(body)
        }

}
