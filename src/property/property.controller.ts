import { Body, Controller, Delete, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {  CreatePropertyDto } from './dto/createProperty.dto';
import { idParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipes';
import { createPropertySchema } from './dto/createPropertyZod.dto';
import type { CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import {  PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';




@Controller('property')
export class PropertyController {

    constructor( private propertyService:PropertyService){


        // this is all removed because of dependency injection container of nest js, 
        //dont create your dependency like this, use nestjs dependency injection system, this is just for demonstration purposes
        // this.propertyService = new PropertyService();

        // this.propertyService = propertyService;
    }





    @Get()
    findAll(@Query() query:PaginationDto){
         return this.propertyService.findAll(query);
    }

    @Get(":id")
    findOne(@Param('id',ParseIntPipe) id){
        return this.propertyService.findOne(id);
    }

    @Post()
    create(@Body() dto:CreatePropertyDto){    
        return this.propertyService.create(dto);
    }


    @Patch(':id')
    update(
        @Param("id", ParseIdPipe) id ,
        @Body() body:UpdatePropertyDto,
    
    ){
        return this.propertyService.update(id, body);
    }

    @Delete(':id')
    delete(
        @Param("id", ParseIdPipe) id
    ){
        return this.propertyService.delete(id);
    }

}
