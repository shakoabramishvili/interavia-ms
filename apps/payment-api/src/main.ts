import { NestFactory } from '@nestjs/core';
import { PaymentApiModule } from './payment-api.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env variables

async function bootstrap() {
  console.log()
  const app = await NestFactory.create(PaymentApiModule);

  const port = process.env.PM_PORT || 4000;
  await app.listen(port);
  console.info(`Payment API running on ${await app.getUrl()} `);
}
bootstrap();
