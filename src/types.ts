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
  name: string | "";
  amount: string;
  for: string;
  date: string; // Changed to Date type
  deadline: string; // Changed to Date type
  actions:string
};



export type Payment = {
  id: number;
  name: string | "";
  amount: string;
  type: string;
  date: string; // Changed to Date type
  actions:string
}
