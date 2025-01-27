import { useRef, useState } from "react";
import NeonLight from "/NeonLights.png";
import Logo from "/SepehradLogo.png";
import Input from "../components/input";
import PrimaryButton from "../components/PrimaryButton";

const Login = () => {
  const [counter, setCounter] = useState(1);
  const usernameRef = useRef<HTMLInputElement>(null); // Ref for the username input
  const passwordRef = useRef<HTMLInputElement>(null); // Ref for the password input

  const handleSubmit = () => {
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      console.log(username);
      console.log(password);
      // Perform your login logic here
    }
  };
  return (
    <div className="w-screen h-screen bg-Background-dark flex justify-center items-center overflow-hidden ">
      <div className="lg:my-16 lg:mx-20 my-8 mx-4 border-Background-light border-[2px] rounded-[32px] flex gap-12 animate-fade-in-scale ">
        <div className="hidden lg:flex w-1/2">
          <img src={NeonLight} alt="Neon Lights" />
        </div>
        <div className="lg:w-1/2 lg:py-12  px-3 py-6">
          <div className="w-[400px] flex flex-col items-center gap-8 ">
            <img src={Logo} className="w-[259px]" alt="Logo" />
            <p className="text-Primary-light text-[48px] text-right w-full kirekharfont mb-3 ">
              ورود
            </p>

            <Input ref={usernameRef} placeholder="نام کاربری" />
            <Input ref={passwordRef} type="password" placeholder="گذرواژه" />
            <div className=" w-full ">
              <PrimaryButton onClick={handleSubmit} align="center">
                تایید
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
