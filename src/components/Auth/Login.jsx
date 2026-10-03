import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandel = (e) => {
    e.preventDefault();
    handleLogin(Email,Password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-80 w-full max-w-md rounded-xl border-2 border-emerald-600 p-4">
        <form
          onSubmit={(e) => {
            submitHandel(e);
          }}
          className="flex flex-col gap-2"
        >
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="m-2 rounded-full border px-7 py-3 outline-none placeholder:text-gray-400 bg-transparent"
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="m-2 rounded-full border px-7 py-3 outline-none placeholder:text-gray-400 bg-transparent"
            type="password"
            placeholder="Enter password"
            required
          />
          <button
            className="m-2 cursor-pointer rounded-full border px-3 py-2 text-lg font-bold "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
