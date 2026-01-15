import { Column, Table, Model } from "sequelize-typescript";

@Table
export class Items extends Model {
    
    @Column
    name: string

    @Column
    type: string

    @Column
    amount: number

    @Column
    priceForOne: number

    @Column
    hasPic: boolean

}