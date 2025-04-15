import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; // Importar NestExpressApplication
import * as path from 'path'; // Importar path para manejar rutas

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Crear la aplicación como NestExpressApplication
  
  // Config CORS for ngrok
  app.enableCors({
    origin: [
      'http://localhost:3000', // Permitir localhost
      'https://example.com',    // Permitir example.com
      'https://https://arenasfront-dg1324cfn-mavalero010s-projects.vercel.app', // Permitir otro dominio
      /https?:\/\/(.*\.)?ngrok(-free)?\.app$/, // Permitir ngrok
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',         
      'Origin'
    ],
    credentials: true 
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Configurar el directorio público
  app.useStaticAssets(path.join(__dirname, '..', 'public')); // Servir archivos estáticos desde el directorio 'public'

  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api`);
}

bootstrap();