import {  Body, Controller, Post, UseGuards, Get, Req, ForbiddenException, Query, Patch, Param } from '@nestjs/common';
// src/modules/property/property.controller.ts
import { PropertyService } from './property.service';
import { PropertyDto } from './property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get("search")
  async findAll(
    @Query('city') city?: string,
    @Query('neighborhood') neighborhood?: string,
    @Query('type') type?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('featured') featured?: boolean,
    @Query('isNew') isNew?: boolean,
  ): Promise<PropertyDto[]> {
    return this.propertyService.findAll({ city, neighborhood, type, minPrice, maxPrice, featured, isNew });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PropertyDto> {
    return this.propertyService.findOne(id);
  }
}