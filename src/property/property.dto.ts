// src/modules/property/property.dto.ts
import { IsString, IsBoolean, IsDecimal, IsOptional, IsEnum } from 'class-validator';
import { ApartmentType } from './enums/apartment-type.enum';

export class PropertyDto {
  id: number;

  @IsString()
  city: string;

  @IsString()
  neighborhood: string;

  @IsEnum(ApartmentType)
  type: ApartmentType;


  @IsDecimal()
  price: number;

  @IsBoolean()
  featured: boolean;

  @IsBoolean()
  new: boolean;

  
  @IsString()
  description: string;

  @IsString()
  image_url: string;

  createdAt: Date;

  updatedAt: Date;
}