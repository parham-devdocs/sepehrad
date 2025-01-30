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
