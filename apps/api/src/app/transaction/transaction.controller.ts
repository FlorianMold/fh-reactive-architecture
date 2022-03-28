import { Body, Controller, Post } from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import { Transaction } from "@fh/api-interfaces";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post("/")
  async createTransaction(@Body() payload: Transaction) {
    console.log("Create transaction", payload);
    return this.transactionService.createTransactionAndPayment(payload);
  }
}
