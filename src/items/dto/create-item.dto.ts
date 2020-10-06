import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import {Optional} from "@nestjs/common";
import {IsNotEmpty} from "class-validator";

@Entity()
export class CreateItemDto{

    @ObjectIdColumn()
    _id: String;

    @Column()
    @IsNotEmpty()
    name: String;

    @Column()
    @Optional()
    description: String;

    @Column()
    @IsNotEmpty()
    qty: Number;
}