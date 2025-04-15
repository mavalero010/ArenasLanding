import { 
    Injectable, 
    UnauthorizedException, 
    BadRequestException,
    ConflictException,
    ForbiddenException, 
    NotFoundException
  }  from '@nestjs/common';
  import { PrismaService } from '../prisma/prisma.service';
  import { PropertyDto } from './property.dto';
  import { ApartmentType } from './enums/apartment-type.enum'; 

@Injectable()
export class PropertyService {
    constructor(
        private readonly prismaService: PrismaService,
      ) {}
      async findAll(filters: any): Promise<PropertyDto[]> {
        const properties = await this.prismaService.property.findMany({
          where: {
            ...(filters.city && { city: filters.city }),
            ...(filters.neighborhood && { neighborhood: filters.neighborhood }),
            ...(filters.type && { type: filters.type }),
            ...(filters.featured !== undefined && { featured: filters.featured }),
            ...(filters.isNew !== undefined && { new: filters.isNew }), // Cambiado de 'new' a 'isNew'
            ...(filters.minPrice || filters.maxPrice ? {
              price: {
                ...(filters.minPrice && { gte: filters.minPrice }), // Incluye propiedades con precio igual a minPrice
                ...(filters.maxPrice && { lte: filters.maxPrice }), // Incluye propiedades con precio igual a maxPrice
              },
            } : {}), 
          },
        });
    
       
        return properties.map(property => ({
          id: property.id,
          city: property.city,
          neighborhood: property.neighborhood,
          type: property.type as ApartmentType,
          price:Number(property.price),
          featured: property.featured,
          new: property.new,
          description: property.description,
          image_url: property.image_url,
          createdAt: property.createdAt,
          updatedAt: property.updatedAt,
        }));
      }
    
      async findOne(id: string): Promise<PropertyDto> {
        const property = await this.prismaService.property.findUnique({
          where: { id: Number(id) },
        });
        return {
          id: property.id,
          city: property.city,
          neighborhood: property.neighborhood,
          type: property.type as ApartmentType,
          price: Number(property.price),
          featured: property.featured,
          new: property.new,
          description: property.description,
          image_url: property.image_url,
          createdAt: property.createdAt,
          updatedAt: property.updatedAt,
        };
      }
}
