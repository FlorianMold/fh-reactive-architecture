import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TransactionModule } from "./transaction/transaction.module";
import { SdkModule } from "./@graphql";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule, Query } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import configuration from "./configuration";

// Needed, because otherwise the application won't start without a resolver
export class TestResolver {
  @Query(() => String)
  sayHello(): string {
    return "Hello World!";
  }
}

@Module({
  imports: [
    SdkModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
      subscriptions: {
        "graphql-ws": true,
      },
    }),
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [TestResolver],
})
export class AppModule {
  constructor() {
  }
}