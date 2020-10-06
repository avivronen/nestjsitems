import {Entity, Column, ObjectIdColumn} from "typeorm";
import {Optional} from "@nestjs/common";
import {IsNotEmpty, IsNumber} from "class-validator";

@Entity()
export class UpdateItemDto{
    @Column()
    @IsNotEmpty()
    name: String;

    @Column()
    @Optional()
    description: String;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    qty: Number;
}