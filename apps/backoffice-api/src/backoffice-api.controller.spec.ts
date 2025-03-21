import { Test, TestingModule } from '@nestjs/testing';
import { backofficeApiController } from './backoffice-api.controller';
import { backofficeApiService } from './backoffice-api.service';

describe('backofficeApiController', () => {
  let backofficeApiController: backofficeApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [backofficeApiController],
      providers: [backofficeApiService],
    }).compile();

    backofficeApiController = app.get<backofficeApiController>(backofficeApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backofficeApiController.getHello()).toBe('Hello World!');
    });
  });
});
