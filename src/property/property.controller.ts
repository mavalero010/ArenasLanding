import {  Body, Controller, Post, UseGuards, Get, Req, ForbiddenException, Query, Patch, Param } from '@nestjs/common';
// src/modules/property/property.controller.ts
import { PropertyService } from './property.service';
import { ApiTags, ApiResponse, ApiQuery, ApiOperation } from '@nestjs/swagger';
import { PropertyDto } from './property.dto';

@ApiTags('properties')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get("search")
  @ApiOperation({ summary: 'Retrieve a list of properties', description: 'This endpoint returns a list of properties based on the provided filters.' })
  @ApiResponse({ status: 200, description: 'List of properties', type: [PropertyDto] })
  @ApiQuery({ name: 'city', required: false, description: 'Filter by city' })
  @ApiQuery({ name: 'neighborhood', required: false, description: 'Filter by neighborhood' })
  @ApiQuery({ name: 'type', required: false, description: 'Filter by property type (house, apartment, etc.)' })
  @ApiQuery({ name: 'minPrice', required: false, description: 'Minimum price filter' })
  @ApiQuery({ name: 'maxPrice', required: false, description: 'Maximum price filter' })
  @ApiQuery({ name: 'featured', required: false, description: 'Filter by featured properties' })
  @ApiQuery({ name: 'isNew', required: false, description: 'Filter by new properties' }) // Cambiado de 'new' a 'isNew'
  async findAll(
    @Query('city') city?: string,
    @Query('neighborhood') neighborhood?: string,
    @Query('type') type?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('featured') featured?: boolean,
    @Query('isNew') isNew?: boolean, // Cambiado de 'new' a 'isNew'
  ): Promise<PropertyDto[]> {
    return this.propertyService.findAll({ city, neighborhood, type, minPrice, maxPrice, featured, isNew }); // Cambiado de 'new' a 'isNew'
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a property by ID', description: 'This endpoint returns a single property based on the provided ID.' })
  @ApiResponse({ status: 200, description: 'Get a property by ID', type: PropertyDto })
  async findOne(@Param('id') id: string): Promise<PropertyDto> {
    return this.propertyService.findOne(id);
  }
}