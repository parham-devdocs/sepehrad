import { FormEvent, useRef, useState } from "react";
import NeonLight from "/NeonLights.png";
import Logo from "/SepehradLogo.png";
import Input from "../components/input";
import PrimaryButton from "../components/PrimaryButton";
import { useMutation } from "react-query";
import cookie from "js-cookie";
import axiosInstance from "../lib/axios";
import Spinner from "../components/spinner";


type Login = {
  password: string;
  username: string;
};
const postData = async (data:Login) => {
  const response = await axiosInstance.post("/login/", data);
  return response.data;
};

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null); // Ref for the username input
  const passwordRef = useRef<HTMLInputElement>(null); // Ref for the password input
  const [errors, setErrors] = useState<Login>({ password: "", username: "" });
  const { mutate, isLoading, isError, error } = useMutation(postData, {
    onSuccess: async (data: any) => {
      const accessToken = await data.data.access;
      const refreshToken = await data.data.refresh;

      axiosInstance.defaults.headers.common[
        "authorization"
      ] = `Bearer ${accessToken}`;
      cookie.set("accessToken", accessToken, { expires: 2 });
      cookie.set("refreshToken", refreshToken, { expires: 7 });
      console.log(cookie.get("accessToken"))

    },
    onError: (error) => console.error("Error:", error),
  });
  const handleInputChange = (field: keyof Login) => {
    // Check if the field is being typed into
    if (field === "username" && usernameRef.current?.value) {
      // Clear the error message while typing
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    } else if (field === "password" && passwordRef.current?.value) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }

    // Check for empty fields and set error messages accordingly
    if (field === "username" && !usernameRef.current?.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "نام کاربری الزامی است",
      }));
    }
    if (field === "password" && !passwordRef.current?.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "رمز عبور الزامی است",
      }));
    }
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      let newErrors = { password: "", username: "" };

      if (!username) newErrors.username = "نام کاربری الزامی است"; // "Username is required"
      if (!password) newErrors.password = "رمز عبور الزامی است"; // "Password is required"

      setErrors(newErrors);

      // Log the errors after state update

      // Perform your login logic here if no errors
      if (usernameRef.current?.value && passwordRef.current?.value) {
        mutate({ username, password });
      }
    }
  };

  return (
    <form
      className="w-screen h-screen bg-Background-dark flex justify-center items-center overflow-hidden"
      onSubmit={formSubmit}
    >
      <div className="lg:my-16 lg:mx-20 my-8 mx-4 border-Background-light border-[2px] rounded-[32px] flex gap-12 animate-fade-in-scale">
        <div className="hidden lg:flex w-1/2">
          <img src={NeonLight} alt="Neon Lights" />
        </div>
        <div className="lg:w-1/2 lg:py-12 px-3 py-6">
          <div className="w-[400px] flex flex-col items-center gap-4">
            <img src={Logo} className="w-[259px]" alt="Logo" />
            <p className="text-Primary-light text-[48px] text-right w-full kirekharfont mb-3">
              ورود
            </p>
            <div className="space-y-2 w-full h-24">
              <Input
                ref={usernameRef}
                placeholder="نام کاربری"
                onChange={() => handleInputChange("username")}
              />
              {errors.username && (
                <span className="text-red-500 text-[13px] text-right block animate-fade-in-scale">
                  {errors.username}
                </span>
              )}
            </div>
            {/* Display username error */}
            <div className="space-y-2 w-full h-24">
              <Input
                ref={passwordRef}
                type="password"
                placeholder="گذرواژه"
                onChange={() => handleInputChange("password")}
              />
              {errors.password && (
                <span className="text-red-500  text-[13px] text-right block animate-fade-in-scale">
                  {errors.password}
                </span>
              )}
            </div>
            {/* Display password error */}
            <div className="w-full">
              <PrimaryButton align="center" >
                {isLoading ? <Spinner size={24} /> : "تایید"}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      
    </form>
  );
};

export default Login;
