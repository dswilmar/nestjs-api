import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateProductDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Min(0)
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @Min(1)
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
