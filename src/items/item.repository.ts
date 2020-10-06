import { EntityRepository, Repository } from 'typeorm';
import {ItemEntity} from "./item.entity";
import {CreateItemDto} from "./dto/create-item.dto";
import {NotFoundException} from "@nestjs/common";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {UpdateItemDto} from "./dto/update-item-dto";
import {UpdateResult} from "typeorm/query-builder/result/UpdateResult";

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {

    async createItem(createItemDto: CreateItemDto): Promise<ItemEntity> {
        const { name, description, qty } = createItemDto;
        const newItem = new ItemEntity();
        newItem.name = name;
        newItem.description = description;
        newItem.qty = qty;
        await newItem.save();

        return newItem;
    }

    async getItems(): Promise<ItemEntity[]> {
        return await this.find();
    }
    async removeItem(id): Promise<any> {
        return await this.delete(id);
    }

    async findItem(id): Promise<ItemEntity> {
        const found = await this.findOne(id);
        if(!found) {
            throw new NotFoundException();
        }
        return found;
    }

    async updateItem(id: string, name, description, qty): Promise<UpdateResult> {
        const item = await this.findItem(id);
        return await this.update(id, {name, description, qty});
    }




}