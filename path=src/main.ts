import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Config CORS para permitir múltiples dominios
  app.enableCors({
    origin: [
      'http://localhost:3000', // Permitir localhost
      'https://example.com',    // Permitir example.com
      'https://another-domain.com', // Permitir otro dominio
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

  await app.listen(3000);
}
bootstrap(); 