import axios from "axios";
import cookie from "js-cookie";
import { userLoginType } from "../types";
type UserResponseData = {
  message: string;
  data: {
    refresh: string;
    access: string;
  };
};

export async function LoginAxios(data: userLoginType): Promise<boolean> {
  try {
    // Await the response from the Axios request
    const response = await axios.post<UserResponseData>(
      "https://sepehradmanage.runflare.run/accounts/api/login/",
      data
    );

    // Set the tokens in cookies
    cookie.set("refresh", response.data.data.refresh, { expires: 7 });
    cookie.set("access", response.data.data.access, { expires: 60 });

    return true; // Return true on successful login
  } catch (error) {
    // Handle and rethrow the error
    throw new Error((error as Error).message); // Ensure the error is a string
  }
}





