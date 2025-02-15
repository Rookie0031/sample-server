import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World! Jisu! version3');
    });
  });

  describe('getUserInfo', () => {
    it('should return user information', () => {
      const result = appController.getUserInfo('123');
      expect(result).toHaveProperty('id', '123');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('email');
    });
  });

  describe('getServerStatus', () => {
    it('should return server status', () => {
      const result = appController.getServerStatus();
      expect(result).toHaveProperty('status', 'running');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('version');
    });
  });
});
