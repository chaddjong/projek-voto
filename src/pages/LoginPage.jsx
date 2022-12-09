import React from "react";
import background from "../images/bg-login.svg";

const LoginPage = () => {
  return (
    <div className="relative">
      <div className="absolute w-screen flex justify-center z-0 top-[219px]">
        <img className="w-[360px] h-[270px]" src={background} alt="login-img" />
      </div>
      <div className="flex h-min justify-center">
        <h1 className="text-7xl text-[#39374D] font-josefinsans mt-[5.25rem] z-10">
          .voto
          <span className="text-[#575A89] font-dmsans">.</span>
        </h1>
      </div>
      <div className="flex mt-[430px] justify-center">
        <button className="z-20 bg-second w-[230px] h-[64px] rounded-[10px] opacity-70 font-dmsans text-white text-[25px] hover:opacity-100">
          login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
