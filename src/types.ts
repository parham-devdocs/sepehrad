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
  id: number;
  name: string | "";
  phone_number: string;
  total_debt: string;
  status: string;
  balance: string;
};

export type Debt = {
  id: number;
  name: string | "";
  amount: string;
  for: string;
  date: string; // Changed to Date type
  deadline: Date; // Changed to Date type
};

