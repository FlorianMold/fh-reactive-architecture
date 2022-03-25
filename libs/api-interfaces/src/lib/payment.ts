export interface User {
  username: string;
  password: string;
}

export interface AuthenticatedUser extends User {
  person: Person;
}

export interface Person {
  name: string;
  iban: string;
}

export interface Payment {
  from: Person;
  to: Person;
  amount: number;
  paymentReference: string;
  date: string;
}

export interface Transaction {
  from: Person;
  to: Person;
  amount: number;
  paymentReference: string;
  executionDate: string;
}
