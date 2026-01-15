import { Body, Controller, Get ,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { ItemDto } from './items/items.dto';
import { Items } from './items/items.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
