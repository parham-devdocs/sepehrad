import axios from "axios";
import Cookie from "js-cookie";
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
      localStorage.setItem("profile_image",response.data.data.user_info.profile_image as string)

      Cookie.set("refresh", response.data.data.refresh, { expires: 7 });
      Cookie.set("access", response.data.data.access, { expires: 60 });
      return response
    }
   throw new Error("نام کاربری یا رمز عبور اشتباه است")
  } catch (error) {
    // Handle and rethrow the error
    throw new Error((error as Error).message); // Ensure the error is a string
  }
}


export async function dataFetcher(url:string) {
  let accessToken = Cookie.get("access") as string
  let refreshToken = Cookie.get("refresh") as string

  try {
    // First attempt to fetch the creditors list
    let response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    });

    // If the response is successful, return the data
    return response.data;

  } catch (error:any) {
    // Check if the error is due to an unauthorized access (401)
    if (error.response && error.response.status === 401) {
      try {
        // Attempt to refresh the access token
        const refreshResponse = await axios.post(
          "https://sepehradmanage.runflare.run/accounts/api/token/refresh/",
          {
          
            refresh: refreshToken
          },
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        
        // Update the access token
        accessToken = refreshResponse.data as string // Assuming the new token is in 'access'
        Cookie.set("access", accessToken); // Update cookie if necessary
        // Retry fetching the creditors list with the new access token
        const retryResponse = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
          }
        });
console.log(retryResponse.status)
        return retryResponse.data; // Return the data from the retry

      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        localStorage.clear(); // Clear local storage on failure
        console.log("Logout"); // Log out the user
        return false; // Return false to indicate failure
      }
    } else {
      console.error("Error fetching creditors list:", error);
      return false; // Return false for other errors
    }
  }
}



