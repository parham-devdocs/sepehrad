import { FormEvent, useRef } from "react";
import NeonLight from "/NeonLights.png";
import Logo from "/SepehradLogo.png";
import Input from "../components/input";
import PrimaryButton from "../components/PrimaryButton";
import { useMutation } from "react-query";
import Spinner from "../components/spinner";
import { userLoginType } from "../types";
import useLoginValidation from "../hooks/loginValidation";
import { useNavigate } from "react-router-dom";
import { LoginAxios } from "../lib/LoginAxiox";
const postData = async (data: userLoginType) => {
  try {

    const response= await LoginAxios(data)
    
    console.log(response); // Log the response data
    return response; // Return the response data
  } catch (error) {
    console.error("Error posting data:", error); // Log the error
    throw error; // Rethrow the error for further handling if needed
  }
};




const Login = () => {
  const navigate=useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null); // Ref for the username input
  const passwordRef = useRef<HTMLInputElement>(null); // Ref for the password input
  // const [errors, setErrors] = useState<userLoginType>({ password: "", username: "" });
  const {validateLogin,errors,setErrors} = useLoginValidation({ usernameRef, passwordRef });
  const { mutate, isLoading } = useMutation(postData, {
    onSuccess: async (data: any) => {
   localStorage.setItem("username",data.data.user_info.username)
    navigate("/")
    },

    onError: (error) => console.error("Error:", error),
  });

  



  const handleInputChange = () => {
 
    validateLogin("password")
    validateLogin("username")
    console.log(errors)
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
                onChange={() => handleInputChange()}
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
                onChange={() => handleInputChange()}
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
