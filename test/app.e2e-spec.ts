import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/user/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/123')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', '123');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('email');
      });
  });

  it('/status (GET)', () => {
    return request(app.getHttpServer())
      .get('/status')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('status', 'running');
        expect(res.body).toHaveProperty('timestamp');
        expect(res.body).toHaveProperty('version');
      });
  });
});
