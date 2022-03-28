import { Module } from "@nestjs/common";
import { SdkModule } from "../@graphql";
import { TransactionService } from "./transaction.service";
import { TransactionController } from "./transaction.controller";

@Module({
  imports: [SdkModule],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
