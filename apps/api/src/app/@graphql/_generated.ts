import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['Int']>;
  readonly _gt: InputMaybe<Scalars['Int']>;
  readonly _gte: InputMaybe<Scalars['Int']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['Int']>;
  readonly _lte: InputMaybe<Scalars['Int']>;
  readonly _neq: InputMaybe<Scalars['Int']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['String']>;
  readonly _gt: InputMaybe<Scalars['String']>;
  readonly _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike: InputMaybe<Scalars['String']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex: InputMaybe<Scalars['String']>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like: InputMaybe<Scalars['String']>;
  readonly _lt: InputMaybe<Scalars['String']>;
  readonly _lte: InputMaybe<Scalars['String']>;
  readonly _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike: InputMaybe<Scalars['String']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar: InputMaybe<Scalars['String']>;
};

/**
 * Stores the payments of the application
 *
 *
 * columns and relationships of "banking.payments"
 *
 */
export type Banking_Payments = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** aggregated selection of "banking.payments" */
export type Banking_Payments_Aggregate = {
  readonly aggregate: Maybe<Banking_Payments_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Banking_Payments>;
};

/** aggregate fields of "banking.payments" */
export type Banking_Payments_Aggregate_Fields = {
  readonly avg: Maybe<Banking_Payments_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max: Maybe<Banking_Payments_Max_Fields>;
  readonly min: Maybe<Banking_Payments_Min_Fields>;
  readonly stddev: Maybe<Banking_Payments_Stddev_Fields>;
  readonly stddev_pop: Maybe<Banking_Payments_Stddev_Pop_Fields>;
  readonly stddev_samp: Maybe<Banking_Payments_Stddev_Samp_Fields>;
  readonly sum: Maybe<Banking_Payments_Sum_Fields>;
  readonly var_pop: Maybe<Banking_Payments_Var_Pop_Fields>;
  readonly var_samp: Maybe<Banking_Payments_Var_Samp_Fields>;
  readonly variance: Maybe<Banking_Payments_Variance_Fields>;
};


/** aggregate fields of "banking.payments" */
export type Banking_Payments_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<Banking_Payments_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Banking_Payments_Avg_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "banking.payments". All fields are combined with a logical 'AND'. */
export type Banking_Payments_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<Banking_Payments_Bool_Exp>>;
  readonly _not: InputMaybe<Banking_Payments_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<Banking_Payments_Bool_Exp>>;
  readonly amount: InputMaybe<Float8_Comparison_Exp>;
  readonly date: InputMaybe<Date_Comparison_Exp>;
  readonly from_iban: InputMaybe<String_Comparison_Exp>;
  readonly from_name: InputMaybe<String_Comparison_Exp>;
  readonly id: InputMaybe<Int_Comparison_Exp>;
  readonly payment_reference: InputMaybe<String_Comparison_Exp>;
  readonly to_iban: InputMaybe<String_Comparison_Exp>;
  readonly to_name: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "banking.payments" */
export enum Banking_Payments_Constraint {
  /** unique or primary key constraint */
  PaymentsPkey = 'payments_pkey'
}

/** input type for incrementing numeric columns in table "banking.payments" */
export type Banking_Payments_Inc_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "banking.payments" */
export type Banking_Payments_Insert_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly date: InputMaybe<Scalars['date']>;
  readonly from_iban: InputMaybe<Scalars['String']>;
  readonly from_name: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_reference: InputMaybe<Scalars['String']>;
  readonly to_iban: InputMaybe<Scalars['String']>;
  readonly to_name: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Banking_Payments_Max_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Banking_Payments_Min_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "banking.payments" */
export type Banking_Payments_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Banking_Payments>;
};

/** on_conflict condition type for table "banking.payments" */
export type Banking_Payments_On_Conflict = {
  readonly constraint: Banking_Payments_Constraint;
  readonly update_columns: ReadonlyArray<Banking_Payments_Update_Column>;
  readonly where: InputMaybe<Banking_Payments_Bool_Exp>;
};

/** Ordering options when selecting data from "banking.payments". */
export type Banking_Payments_Order_By = {
  readonly amount: InputMaybe<Order_By>;
  readonly date: InputMaybe<Order_By>;
  readonly from_iban: InputMaybe<Order_By>;
  readonly from_name: InputMaybe<Order_By>;
  readonly id: InputMaybe<Order_By>;
  readonly payment_reference: InputMaybe<Order_By>;
  readonly to_iban: InputMaybe<Order_By>;
  readonly to_name: InputMaybe<Order_By>;
};

/** primary key columns input for table: banking_payments */
export type Banking_Payments_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "banking.payments" */
export enum Banking_Payments_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  FromIban = 'from_iban',
  /** column name */
  FromName = 'from_name',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  ToIban = 'to_iban',
  /** column name */
  ToName = 'to_name'
}

/** input type for updating data in table "banking.payments" */
export type Banking_Payments_Set_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly date: InputMaybe<Scalars['date']>;
  readonly from_iban: InputMaybe<Scalars['String']>;
  readonly from_name: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_reference: InputMaybe<Scalars['String']>;
  readonly to_iban: InputMaybe<Scalars['String']>;
  readonly to_name: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Banking_Payments_Stddev_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Banking_Payments_Stddev_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Banking_Payments_Stddev_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Banking_Payments_Sum_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly id: Maybe<Scalars['Int']>;
};

/** update columns of table "banking.payments" */
export enum Banking_Payments_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  FromIban = 'from_iban',
  /** column name */
  FromName = 'from_name',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  ToIban = 'to_iban',
  /** column name */
  ToName = 'to_name'
}

/** aggregate var_pop on columns */
export type Banking_Payments_Var_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Banking_Payments_Var_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Banking_Payments_Variance_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/**
 * Stores the transactions of the database
 *
 *
 * columns and relationships of "banking.transactions"
 *
 */
export type Banking_Transactions = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly execution_date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** aggregated selection of "banking.transactions" */
export type Banking_Transactions_Aggregate = {
  readonly aggregate: Maybe<Banking_Transactions_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Banking_Transactions>;
};

/** aggregate fields of "banking.transactions" */
export type Banking_Transactions_Aggregate_Fields = {
  readonly avg: Maybe<Banking_Transactions_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max: Maybe<Banking_Transactions_Max_Fields>;
  readonly min: Maybe<Banking_Transactions_Min_Fields>;
  readonly stddev: Maybe<Banking_Transactions_Stddev_Fields>;
  readonly stddev_pop: Maybe<Banking_Transactions_Stddev_Pop_Fields>;
  readonly stddev_samp: Maybe<Banking_Transactions_Stddev_Samp_Fields>;
  readonly sum: Maybe<Banking_Transactions_Sum_Fields>;
  readonly var_pop: Maybe<Banking_Transactions_Var_Pop_Fields>;
  readonly var_samp: Maybe<Banking_Transactions_Var_Samp_Fields>;
  readonly variance: Maybe<Banking_Transactions_Variance_Fields>;
};


/** aggregate fields of "banking.transactions" */
export type Banking_Transactions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<Banking_Transactions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Banking_Transactions_Avg_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "banking.transactions". All fields are combined with a logical 'AND'. */
export type Banking_Transactions_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<Banking_Transactions_Bool_Exp>>;
  readonly _not: InputMaybe<Banking_Transactions_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<Banking_Transactions_Bool_Exp>>;
  readonly amount: InputMaybe<Float8_Comparison_Exp>;
  readonly execution_date: InputMaybe<Date_Comparison_Exp>;
  readonly from_iban: InputMaybe<String_Comparison_Exp>;
  readonly from_name: InputMaybe<String_Comparison_Exp>;
  readonly id: InputMaybe<Int_Comparison_Exp>;
  readonly payment_reference: InputMaybe<String_Comparison_Exp>;
  readonly to_iban: InputMaybe<String_Comparison_Exp>;
  readonly to_name: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "banking.transactions" */
export enum Banking_Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "banking.transactions" */
export type Banking_Transactions_Inc_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "banking.transactions" */
export type Banking_Transactions_Insert_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly execution_date: InputMaybe<Scalars['date']>;
  readonly from_iban: InputMaybe<Scalars['String']>;
  readonly from_name: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_reference: InputMaybe<Scalars['String']>;
  readonly to_iban: InputMaybe<Scalars['String']>;
  readonly to_name: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Banking_Transactions_Max_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly execution_date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Banking_Transactions_Min_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly execution_date: Maybe<Scalars['date']>;
  readonly from_iban: Maybe<Scalars['String']>;
  readonly from_name: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_reference: Maybe<Scalars['String']>;
  readonly to_iban: Maybe<Scalars['String']>;
  readonly to_name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "banking.transactions" */
export type Banking_Transactions_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Banking_Transactions>;
};

/** on_conflict condition type for table "banking.transactions" */
export type Banking_Transactions_On_Conflict = {
  readonly constraint: Banking_Transactions_Constraint;
  readonly update_columns: ReadonlyArray<Banking_Transactions_Update_Column>;
  readonly where: InputMaybe<Banking_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "banking.transactions". */
export type Banking_Transactions_Order_By = {
  readonly amount: InputMaybe<Order_By>;
  readonly execution_date: InputMaybe<Order_By>;
  readonly from_iban: InputMaybe<Order_By>;
  readonly from_name: InputMaybe<Order_By>;
  readonly id: InputMaybe<Order_By>;
  readonly payment_reference: InputMaybe<Order_By>;
  readonly to_iban: InputMaybe<Order_By>;
  readonly to_name: InputMaybe<Order_By>;
};

/** primary key columns input for table: banking_transactions */
export type Banking_Transactions_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "banking.transactions" */
export enum Banking_Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ExecutionDate = 'execution_date',
  /** column name */
  FromIban = 'from_iban',
  /** column name */
  FromName = 'from_name',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  ToIban = 'to_iban',
  /** column name */
  ToName = 'to_name'
}

/** input type for updating data in table "banking.transactions" */
export type Banking_Transactions_Set_Input = {
  readonly amount: InputMaybe<Scalars['float8']>;
  readonly execution_date: InputMaybe<Scalars['date']>;
  readonly from_iban: InputMaybe<Scalars['String']>;
  readonly from_name: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_reference: InputMaybe<Scalars['String']>;
  readonly to_iban: InputMaybe<Scalars['String']>;
  readonly to_name: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Banking_Transactions_Stddev_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Banking_Transactions_Stddev_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Banking_Transactions_Stddev_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Banking_Transactions_Sum_Fields = {
  readonly amount: Maybe<Scalars['float8']>;
  readonly id: Maybe<Scalars['Int']>;
};

/** update columns of table "banking.transactions" */
export enum Banking_Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ExecutionDate = 'execution_date',
  /** column name */
  FromIban = 'from_iban',
  /** column name */
  FromName = 'from_name',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  ToIban = 'to_iban',
  /** column name */
  ToName = 'to_name'
}

/** aggregate var_pop on columns */
export type Banking_Transactions_Var_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Banking_Transactions_Var_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Banking_Transactions_Variance_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['date']>;
  readonly _gt: InputMaybe<Scalars['date']>;
  readonly _gte: InputMaybe<Scalars['date']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['date']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['date']>;
  readonly _lte: InputMaybe<Scalars['date']>;
  readonly _neq: InputMaybe<Scalars['date']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['float8']>;
  readonly _gt: InputMaybe<Scalars['float8']>;
  readonly _gte: InputMaybe<Scalars['float8']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['float8']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['float8']>;
  readonly _lte: InputMaybe<Scalars['float8']>;
  readonly _neq: InputMaybe<Scalars['float8']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "banking.payments" */
  readonly delete_banking_payments: Maybe<Banking_Payments_Mutation_Response>;
  /** delete single row from the table: "banking.payments" */
  readonly delete_banking_payments_by_pk: Maybe<Banking_Payments>;
  /** delete data from the table: "banking.transactions" */
  readonly delete_banking_transactions: Maybe<Banking_Transactions_Mutation_Response>;
  /** delete single row from the table: "banking.transactions" */
  readonly delete_banking_transactions_by_pk: Maybe<Banking_Transactions>;
  /** insert data into the table: "banking.payments" */
  readonly insert_banking_payments: Maybe<Banking_Payments_Mutation_Response>;
  /** insert a single row into the table: "banking.payments" */
  readonly insert_banking_payments_one: Maybe<Banking_Payments>;
  /** insert data into the table: "banking.transactions" */
  readonly insert_banking_transactions: Maybe<Banking_Transactions_Mutation_Response>;
  /** insert a single row into the table: "banking.transactions" */
  readonly insert_banking_transactions_one: Maybe<Banking_Transactions>;
  /** update data of the table: "banking.payments" */
  readonly update_banking_payments: Maybe<Banking_Payments_Mutation_Response>;
  /** update single row of the table: "banking.payments" */
  readonly update_banking_payments_by_pk: Maybe<Banking_Payments>;
  /** update data of the table: "banking.transactions" */
  readonly update_banking_transactions: Maybe<Banking_Transactions_Mutation_Response>;
  /** update single row of the table: "banking.transactions" */
  readonly update_banking_transactions_by_pk: Maybe<Banking_Transactions>;
};


/** mutation root */
export type Mutation_RootDelete_Banking_PaymentsArgs = {
  where: Banking_Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banking_Payments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Banking_TransactionsArgs = {
  where: Banking_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banking_Transactions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Banking_PaymentsArgs = {
  objects: ReadonlyArray<Banking_Payments_Insert_Input>;
  on_conflict: InputMaybe<Banking_Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banking_Payments_OneArgs = {
  object: Banking_Payments_Insert_Input;
  on_conflict: InputMaybe<Banking_Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banking_TransactionsArgs = {
  objects: ReadonlyArray<Banking_Transactions_Insert_Input>;
  on_conflict: InputMaybe<Banking_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banking_Transactions_OneArgs = {
  object: Banking_Transactions_Insert_Input;
  on_conflict: InputMaybe<Banking_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Banking_PaymentsArgs = {
  _inc: InputMaybe<Banking_Payments_Inc_Input>;
  _set: InputMaybe<Banking_Payments_Set_Input>;
  where: Banking_Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banking_Payments_By_PkArgs = {
  _inc: InputMaybe<Banking_Payments_Inc_Input>;
  _set: InputMaybe<Banking_Payments_Set_Input>;
  pk_columns: Banking_Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Banking_TransactionsArgs = {
  _inc: InputMaybe<Banking_Transactions_Inc_Input>;
  _set: InputMaybe<Banking_Transactions_Set_Input>;
  where: Banking_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banking_Transactions_By_PkArgs = {
  _inc: InputMaybe<Banking_Transactions_Inc_Input>;
  _set: InputMaybe<Banking_Transactions_Set_Input>;
  pk_columns: Banking_Transactions_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "banking.payments" */
  readonly banking_payments: ReadonlyArray<Banking_Payments>;
  /** fetch aggregated fields from the table: "banking.payments" */
  readonly banking_payments_aggregate: Banking_Payments_Aggregate;
  /** fetch data from the table: "banking.payments" using primary key columns */
  readonly banking_payments_by_pk: Maybe<Banking_Payments>;
  /** fetch data from the table: "banking.transactions" */
  readonly banking_transactions: ReadonlyArray<Banking_Transactions>;
  /** fetch aggregated fields from the table: "banking.transactions" */
  readonly banking_transactions_aggregate: Banking_Transactions_Aggregate;
  /** fetch data from the table: "banking.transactions" using primary key columns */
  readonly banking_transactions_by_pk: Maybe<Banking_Transactions>;
};


export type Query_RootBanking_PaymentsArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Payments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Payments_Order_By>>;
  where: InputMaybe<Banking_Payments_Bool_Exp>;
};


export type Query_RootBanking_Payments_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Payments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Payments_Order_By>>;
  where: InputMaybe<Banking_Payments_Bool_Exp>;
};


export type Query_RootBanking_Payments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBanking_TransactionsArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Transactions_Order_By>>;
  where: InputMaybe<Banking_Transactions_Bool_Exp>;
};


export type Query_RootBanking_Transactions_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Transactions_Order_By>>;
  where: InputMaybe<Banking_Transactions_Bool_Exp>;
};


export type Query_RootBanking_Transactions_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  /** fetch data from the table: "banking.payments" */
  readonly banking_payments: ReadonlyArray<Banking_Payments>;
  /** fetch aggregated fields from the table: "banking.payments" */
  readonly banking_payments_aggregate: Banking_Payments_Aggregate;
  /** fetch data from the table: "banking.payments" using primary key columns */
  readonly banking_payments_by_pk: Maybe<Banking_Payments>;
  /** fetch data from the table: "banking.transactions" */
  readonly banking_transactions: ReadonlyArray<Banking_Transactions>;
  /** fetch aggregated fields from the table: "banking.transactions" */
  readonly banking_transactions_aggregate: Banking_Transactions_Aggregate;
  /** fetch data from the table: "banking.transactions" using primary key columns */
  readonly banking_transactions_by_pk: Maybe<Banking_Transactions>;
};


export type Subscription_RootBanking_PaymentsArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Payments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Payments_Order_By>>;
  where: InputMaybe<Banking_Payments_Bool_Exp>;
};


export type Subscription_RootBanking_Payments_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Payments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Payments_Order_By>>;
  where: InputMaybe<Banking_Payments_Bool_Exp>;
};


export type Subscription_RootBanking_Payments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBanking_TransactionsArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Transactions_Order_By>>;
  where: InputMaybe<Banking_Transactions_Bool_Exp>;
};


export type Subscription_RootBanking_Transactions_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Banking_Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Banking_Transactions_Order_By>>;
  where: InputMaybe<Banking_Transactions_Bool_Exp>;
};


export type Subscription_RootBanking_Transactions_By_PkArgs = {
  id: Scalars['Int'];
};

export type OnPaymentsSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnPaymentsSubscriptionSubscription = { readonly banking_payments: ReadonlyArray<{ readonly amount: any | null, readonly date: any | null, readonly from_iban: string | null, readonly from_name: string | null, readonly payment_reference: string | null, readonly to_iban: string | null, readonly to_name: string | null, readonly id: number }> };

export type CreatePaymentMutationVariables = Exact<{
  amount: Scalars['float8'];
  date: Scalars['date'];
  fromIban: Scalars['String'];
  fromName: Scalars['String'];
  toIban: Scalars['String'];
  toName: Scalars['String'];
  paymentReference: Scalars['String'];
}>;


export type CreatePaymentMutation = { readonly insert_banking_payments: { readonly returning: ReadonlyArray<{ readonly id: number }> } | null };

export type CreateTransactionMutationVariables = Exact<{
  amount: Scalars['float8'];
  executionDate: Scalars['date'];
  fromIban: Scalars['String'];
  fromName: Scalars['String'];
  toIban: Scalars['String'];
  toName: Scalars['String'];
  paymentReference: Scalars['String'];
}>;


export type CreateTransactionMutation = { readonly insert_banking_transactions: { readonly returning: ReadonlyArray<{ readonly id: number }> } | null };


export const OnPaymentsSubscriptionDocument = gql`
    subscription onPaymentsSubscription {
  banking_payments {
    amount
    date
    from_iban
    from_name
    payment_reference
    to_iban
    to_name
    id
  }
}
    `;
export const CreatePaymentDocument = gql`
    mutation createPayment($amount: float8!, $date: date!, $fromIban: String!, $fromName: String!, $toIban: String!, $toName: String!, $paymentReference: String!) {
  insert_banking_payments(
    objects: {amount: $amount, date: $date, from_iban: $fromIban, from_name: $fromName, payment_reference: $paymentReference, to_iban: $toIban, to_name: $toName}
  ) {
    returning {
      id
    }
  }
}
    `;
export const CreateTransactionDocument = gql`
    mutation createTransaction($amount: float8!, $executionDate: date!, $fromIban: String!, $fromName: String!, $toIban: String!, $toName: String!, $paymentReference: String!) {
  insert_banking_transactions(
    objects: {amount: $amount, execution_date: $executionDate, from_iban: $fromIban, from_name: $fromName, payment_reference: $paymentReference, to_iban: $toIban, to_name: $toName}
  ) {
    returning {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    onPaymentsSubscription(variables?: OnPaymentsSubscriptionSubscriptionVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OnPaymentsSubscriptionSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<OnPaymentsSubscriptionSubscription>(OnPaymentsSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'onPaymentsSubscription', 'subscription');
    },
    createPayment(variables: CreatePaymentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePaymentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePaymentMutation>(CreatePaymentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPayment', 'mutation');
    },
    createTransaction(variables: CreateTransactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTransactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTransactionMutation>(CreateTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTransaction', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;