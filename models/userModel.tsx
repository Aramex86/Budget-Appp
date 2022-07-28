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

export interface IUser {
  _id: string;
  name: string;
  email: string;
  lastName: string;
  phone: string;
  cards: UserCards[];
}
