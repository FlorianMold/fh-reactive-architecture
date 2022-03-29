import { Body, Controller, Post } from "@nestjs/common";
import { TransactionService } from "./transaction.service";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post("/transaction")
  createTransaction(@Body() payload) {}
}
