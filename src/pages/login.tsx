import { FormEvent, useRef, useState } from "react";
import NeonLight from "/NeonLights.png";
import Logo from "/SepehradLogo.png";
import Input from "../components/input";
import PrimaryButton from "../components/PrimaryButton";
import Spinner from "../components/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLoginType } from "../types";
import useLoginValidation from "../hooks/loginValidation";
import { data, useNavigate } from "react-router-dom";
import { LoginAxios } from "../lib/LoginAxios";

const postData = async (data: userLoginType) => {

  try {
    const response = await LoginAxios(data);
    if (response.status===201 || response.status===200) {
      return response.data.data.user_info

    }
    throw new Error("رمز عبور یا نام کاربری اشتباه است")
    
  } catch (error) {
    console.error("Error posting data:", error);
    
    throw error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading,setIsLoading]=useState<Boolean>(false)
  const { validateLogin, errors, setErrors } = useLoginValidation({
    usernameRef,
    passwordRef,
  });
  
  const handleInputChange = () => {
    validateLogin("password");
    validateLogin("username");
    console.log(errors);
  };
  const showSucessMessage = () => {
    toast.success("ورود با موفقیت انجام شد", {
      position: "top-right"
    });
  };
  const showErrorMessage = () => {
    toast.error("رمز عبور یا نام کاربری اشتباه است", {
      position: "top-right"
    });
  };
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (usernameRef.current && passwordRef.current) {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let newErrors = { password: "", username: "" };

        // Validate username and password
        if (!username) newErrors.username = "نام کاربری الزامی است"; // "Username is required"
        if (!password) newErrors.password = "رمز عبور الزامی است"; // "Password is required"

        setErrors(newErrors); // Update the error state

        // Check if there are no errors before proceeding
        if (!newErrors.username && !newErrors.password) {
          setIsLoading(true)
            try {
                const response = await postData({ username, password });
              

                if (response) {
                  setIsLoading(false)
                  showSucessMessage();
                 setTimeout(() => {
                  navigate("/");

                 }, 2000);   
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false)
                showErrorMessage(); // Show the error message
            }
        }
    }
};


  return (
    <form
      className="w-screen min-h-screen bg-Background-dark flex justify-center items-center overflow-hidden"
      onSubmit={formSubmit}
    >
      <div className="w-full lg:my-4 lg:mx-48  mx-4 border-Background-light border-[2px] rounded-[32px] flex gap-12 animate-fade-in-scale shadow-lg">
        <div className="hidden lg:flex w-1/2">
          <img
            src={NeonLight}
            alt="Neon Lights"
            className="object-cover rounded-l-[32px]"
          />
        </div>
        <div className=" w-full lg:w-1/2 lg:py-12 px-3 py-6">
          <div className="lg:w-[400px] w-full flex flex-col items-center gap-4">
            <img src={Logo} className="w-[259px] mb-4" alt="Logo" />
            <p className="text-Primary-light text-[48px] text-right w-full kirekharfont mb-3">
              ورود
            </p>
            <div className="space-y-2 w-full h-24">
              <Input
                ref={usernameRef}
                placeholder="نام کاربری"
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {errors.username && (
                <span className="text-red-500 text-[13px] text-right block animate-fade-in-scale">
                  {errors.username}
                </span>
              )}
            </div>
            <div className="space-y-2 w-full h-24">
              <Input
                ref={passwordRef}
                type="password"
                placeholder="گذرواژه"
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {errors.password && (
                <span className="text-red-500 text-[13px] text-right block animate-fade-in-scale">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="w-full">
              <PrimaryButton align="center" >
                 {isLoading ? <Spinner size={24}/> :"تایید"}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </form>
  );
};

export default Login;
