import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { no } from 'zod/locales';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {


    constructor(@InjectRepository(Property) private  propertyRepo: Repository<Property>) {

    }


    async findOne(id:number){
        const property = await this.propertyRepo.findOne({
            where:{
                id
            }
        });

        if(!property){
            throw new NotFoundException("Property not found");
        }
        return property;

    }

    async findAll(query:PaginationDto){

        return await this.propertyRepo.find({
            skip: query.skip,
            take: query.limit ?? DEFAULT_PAGE_SIZE
        });

    }

    async create(dto:CreatePropertyDto){

       return await this.propertyRepo.save(dto);

    }

    async update(id:number, dto:UpdatePropertyDto){
        
        // const property = await this.propertyRepo.find({
        //     where:{
        //         id
        //     }
        // });

        // if(!property){
        //     throw new NotFoundException("Property not found");
        // }

        // Object.assign(property, dto);

        // return await this.propertyRepo.save(property);  


        return await this.propertyRepo.update(id, dto);

    }
    async delete(id:number){

        return await this.propertyRepo.delete(id);



    }
}
