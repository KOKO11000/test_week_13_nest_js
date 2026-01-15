import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PrimaryKey } from "sequelize-typescript";

export class ItemDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    type: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNumber()
    @IsNotEmpty()
    priceForOne: number

    @IsBoolean()
    asPic: boolean
}