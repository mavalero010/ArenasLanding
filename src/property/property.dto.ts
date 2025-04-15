// src/modules/property/property.dto.ts
import { IsString, IsBoolean, IsDecimal, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApartmentType } from './enums/apartment-type.enum';

export class PropertyDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  neighborhood: string;

  @ApiProperty({ enum: ApartmentType })
  @IsEnum(ApartmentType)
  type: ApartmentType;


  @ApiProperty()
  @IsDecimal()
  price: number;

  @ApiProperty()
  @IsBoolean()
  featured: boolean;

  @ApiProperty()
  @IsBoolean()
  new: boolean;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image_url: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}