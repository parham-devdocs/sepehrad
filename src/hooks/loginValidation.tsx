import { useState, useEffect,RefObject } from "react";
import { userLoginType } from "../types";
interface LoginValidationProps {
  usernameRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
}
const LoginValidation = ({ usernameRef, passwordRef }:LoginValidationProps) => {
  const [errors, setErrors] = useState({ username: "", password: "" });

  function validateLogin(field: keyof userLoginType) {
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
  }

  // Log the errors whenever they change
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return {validateLogin, errors,setErrors}
};

export default LoginValidation;
