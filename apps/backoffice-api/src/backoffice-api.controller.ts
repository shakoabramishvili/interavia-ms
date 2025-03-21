import { Controller, Get } from '@nestjs/common';
import { backofficeApiService } from './backoffice-api.service';

@Controller()
export class backofficeApiController {
  constructor(private readonly backofficeApiService: backofficeApiService) {}

  @Get()
  getHello(): string {
    return this.backofficeApiService.getHello();
  }
}
