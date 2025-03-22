import { Module } from '@nestjs/common';
import { PaymentApiController } from './payment-api.controller';
import { PaymentApiService } from './payment-api.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', // Change to 'mysql' or 'mongodb' if needed
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false, // Disable in production
      }),
    }),
  ],
  controllers: [PaymentApiController],
  providers: [PaymentApiService],
})
export class PaymentApiModule {}
