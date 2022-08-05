export interface UserCards {
  paysystem: string;
  cardNumber: string;
  amount: string;
  currency: string;
  _id: string;
  date: string;
  cardHolder: string;
  cardBg: string;
}

export interface UserCategories {
  category: string;
  amount: string;
  currency: string;
}

export interface UserPayments {
  _id: string;
  category: string;
  amount: string;
  date: string;
}

export interface UserCategory {
  category: string;
  amount: string;
  currency: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  lastName: string;
  phone: string;
  mainCard: UserCards;
  cards: UserCards[];
  payments: UserPayments[];
  categories: UserCategories[];
}
