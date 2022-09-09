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
  _id?: string;
  category: string;
  amount: string;
  date: string;
  currency?: string;
  created?: string;
  mainCardId: string;
  cardNumber?: string;
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

// {"_id":{"$oid":"62dc4a8105f94163a295537c"},"cards":[{"_id":{"$oid":"62f2be1eaf4d148cffc76eaa"},"currency":"USD","date":"03/2022","paysystem":"visa","cardBg":"#484ef4","cardholder":"Jhon Doe","amount":"3000","cardNumber":"1215165115351151","created":{"$date":{"$numberLong":"1660075550000"}}}],"lastName":"Doe","mainCard":{"_id":{"$oid":"62f2be1eaf4d148cffc76eaa"},"currency":"USD","date":"03/2022","paysystem":"visa","cardBg":"#484ef4","cardholder":"Jhon Doe","amount":"3000","cardNumber":"1215165115351151"},"name":"Jhon","phone":null,"categories":[{"category":"Apartament","amount":"1500","currency":"USD"},{"category":"Grocery","amount":"100","currency":"USD"},{"category":"Party","currency":"USD","amount":"2500"},{"category":"Medicine","currency":"USD","amount":"700"}]}
