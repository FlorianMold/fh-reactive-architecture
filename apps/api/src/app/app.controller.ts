import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  @Get("hello")
  getData(): string {
    return "Hello World";
  }
}
