import {Injectable, NotFoundException} from '@nestjs/common';
import {ItemEntity} from "./item.entity";
import {CreateItemDto} from "./dto/create-item.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ItemRepository} from "./item.repository";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {UpdateItemDto} from "./dto/update-item-dto";
import {UpdateResult} from "typeorm/query-builder/result/UpdateResult";

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(ItemRepository)
        private itemRepository: ItemRepository
    ) {}

    /*private readonly items: Item[] = [
        {
            id: "2342423423423",
            name: "Item 1",
            qty: 100,
            description: 'This is item one'
        },
        {
            id: "6434432217",
            name: "Item 2",
            qty: 50,
            description: 'This is item two'
        }
    ]*/

    async getItems(): Promise<ItemEntity[]> {
        //return this.items;
        return await this.itemRepository.getItems();
    }

    async findItemById(id: string): Promise<ItemEntity> {
        return await this.itemRepository.findItem(id);
    }

    async create(item: CreateItemDto): Promise<ItemEntity> {
        return await this.itemRepository.createItem(item);
    }

    async delete(id: string): Promise<DeleteResult> {
        const res =  await this.itemRepository.removeItem(id);

        if(res.affected === 0) {
            throw new NotFoundException(`Item with "${id}" not found`);
        }
        return res;
    }

    async update(id: string, updateItemDto: UpdateItemDto): Promise<UpdateResult> {
        const {name, description, qty} = updateItemDto;
        const res =  await this.itemRepository.updateItem(id, name, description, qty);


        return res;
    }
}
