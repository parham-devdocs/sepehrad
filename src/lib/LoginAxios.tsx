import axios from "axios";
import cookie from "js-cookie";
import { userLoginType } from "../types";
type UserResponseData = {
  message: string;
  data: {
    refresh: string;
    access: string;
    user_info: {
        id: number;
        username: string;
        first_name: string;
        last_name: string;
        profile_image: string | null;
    
    
    }
  };
};

export async function LoginAxios(data: userLoginType) {
  try {
    // Await the response from the Axios request
    const response = await axios.post<UserResponseData>(
      "https://sepehradmanage.runflare.run/accounts/api/login/",
      data
    );

    // Set the tokens in cookies
    if (response.status===200 || 201 ) {
      localStorage.setItem("username",response.data.data.user_info.username)
      localStorage.setItem("profile_image",response.data.data.user_info.profile_image)

      cookie.set("refresh", response.data.data.refresh, { expires: 7 });
      cookie.set("access", response.data.data.access, { expires: 60 });
      return response
    }
   throw new Error("نام کاربری یا رمز عبور اشتباه است")
  } catch (error) {
    // Handle and rethrow the error
    throw new Error((error as Error).message); // Ensure the error is a string
  }
}





