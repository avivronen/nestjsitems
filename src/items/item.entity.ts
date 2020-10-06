import {Entity, ObjectID, ObjectIdColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class ItemEntity extends BaseEntity{

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    qty: Number;
}