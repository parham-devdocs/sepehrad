import { ReactNode } from "react";

export type userLoginType = {
  password: string;
  username: string;
};

export type HeaderType = {
  header: string;
  buttonText: string;
  buttonIcon: ReactNode;
  path: string;
};
export type Credit = {
  id: string;
  name: string;
  phone_number: string;
  total_debt: string;
  paid_debt: string;
  remaining_debt: string;
  actions:string
};

export type Debt = {
  id: number;
  creditor: string;
  amount: string; // Consider using a number type if appropriate
  description: string;
  date: string; // You might want to use Date type if you're handling dates
  factor_image: string;
  payment_until: string; // Same as above for date handling
  is_paid: boolean;
};



export type Payment = {
  id: number;
  name: string | "";
  amount: string;
  type: string;
  date: string; // Changed to Date type
  actions:string
}
