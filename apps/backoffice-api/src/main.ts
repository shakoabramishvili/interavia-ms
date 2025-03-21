import { NestFactory } from '@nestjs/core';
import { backofficeApiModule } from './backoffice-api.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env variables

async function bootstrap() {
  const app = await NestFactory.create(backofficeApiModule);
  const port = process.env.BO_PORT || 4000;
  await app.listen(port);
  console.info(`Backoffice API running on ${await app.getUrl()} `);
}
bootstrap();
