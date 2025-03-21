import { Module } from '@nestjs/common';
import { backofficeApiController } from './backoffice-api.controller';
import { backofficeApiService } from './backoffice-api.service';

@Module({
  imports: [],
  controllers: [backofficeApiController],
  providers: [backofficeApiService],
})
export class backofficeApiModule {}
