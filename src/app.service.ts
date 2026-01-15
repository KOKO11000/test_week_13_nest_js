import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFile } from "fs/promises";
@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    const getcAccount = readFile("src/armyAccount.txt", "utf-8",)
    return getcAccount.then((vale)=>{console.log(vale)})
    .catch(err=> console.log(err))
  }
  getHello(): string {
    return 'Hello World!';
  }
}
