import { NestFactory } from "@nestjs/core";
import AppModule from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule.foorRoot({}));
  let PORT = 5000;
  // Enable CORS
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
