import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ItemDto {
    @IsString()
    @IsNotEmpty()
    name: string
    type: string
    @IsNumber()
    @IsNotEmpty()
    amount: number
    priceForOne: number
    @IsBoolean()
    asPic: boolean
}