import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Items } from './items.model';
import { writeFile } from 'fs/promises';

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel(Items)
        private itemsRepository: typeof Items
    ) { }
    async showAllItems() {
        return this.itemsRepository.findAll<Items>()
    }

    async addNewItem(body):Promise<Items> {
        const { name, type, amount, priceForOne, asPic } = body
        return this.itemsRepository.create({
            name,
            type,
            amount,
            priceForOne,
            asPic
        })
    }

    async buyItems(body){
        const {name , type , amount,priceForOne } = body
        const cost = amount * priceForOne
        const updateBudget = writeFile("src/armyAccount.txt","utf-8",(err:any,data:any)=>{
            if (err) {
                console.error(err)
            }
            else{
            const newBudget = data - cost   
            return newBudget
            }
        }) 
        if (!amount ) {
            return name + ' finished'
        }
        // return this.itemsRepository.update()
    }

}
