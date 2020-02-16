import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import AppModule from "../../../app.module";

import { GenericContainer, Wait } from "testcontainers";
const fs = require("fs");

describe("--- TaskController (e2e) ---", () => {
  let app: INestApplication;
  let container;
  const portMongo = 27017;
  jest.setTimeout(30000);
  beforeAll(async done => {
    container = await new GenericContainer("mongo")
      .withExposedPorts(portMongo)
      .withWaitStrategy(Wait.forLogMessage("Listening on 0.0.0.0"))
      .start();
    done();
  });

  afterAll(async done => {
    container.stop();
    done();
  });

  beforeEach(async done => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule.foorRoot({ port: container.getMappedPort(portMongo) })
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    done();
  });

  it("/ (Post)", async done => {
    let rawdata = fs.readFileSync(`${__dirname}/example.json`);

    const response = await request(app.getHttpServer())
      .post("/cost/")
      .send(JSON.parse(rawdata));

    expect(response.status).toBe(201);
    expect(response.body.id).not.toBeNull();
    expect(response.body.value).toBe(20000);
    done();
  });
});
