import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Bắt buộc tắt ETag để tránh trả về 304
  app.getHttpAdapter().getInstance().set('etag', false);

  app.enableCors({
    origin: [
      'http://localhost:3000', // Port của Frontend Next.js
    ],
    methods: 'GET',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
