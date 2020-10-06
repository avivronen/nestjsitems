import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {ItemsService} from "./items.service";
import {ItemEntity} from "./item.entity";
import {ValidateObjectId} from "../shared/pipes/validate-object-id.pipes";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {UpdateItemDto} from "./dto/update-item-dto";
import {UpdateResult} from "typeorm/query-builder/result/UpdateResult";



@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
    }

    @Get()
    findAll(): Promise<ItemEntity[]> {
        return this.itemsService.getItems();
    }

    @Get(':id')
    findOne(@Param('id', ValidateObjectId)  id: string): Promise<ItemEntity> {
        return this.itemsService.findItemById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() item: CreateItemDto): Promise<ItemEntity> {
        //return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
        return this.itemsService.create(item);
    }

    @Delete(':id')
    delete(@Param('id', ValidateObjectId) id: string): Promise<DeleteResult> {
        //return `Delete ${id}`;
        return this.itemsService.delete(id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Body() updateItemDto: UpdateItemDto, @Param('id', ValidateObjectId) id: string): Promise<UpdateResult> {
        return this.itemsService.update(id, updateItemDto);
    }

}
