import { Injectable } from '@nestjs/common';

@Injectable()
export class backofficeApiService {
  getHello(): string {
    return 'Hello World! backoffice qqqqqqq';
  }
}
