"use client";
import MyButton from "@/atoms/button";

const Login = () => {

  const handleLogin = () => {
    // Handle login logic here

  }

  return (
    <form>
      <label htmlFor="email">
        Email
        <input placeholder="johndoe@example.com" name="email" id="email" />
      </label>
      <label htmlFor="name">
        Nom
        <input placeholder="John Doe" name="name" id="name" />
      </label>
      <label htmlFor="">
        Mot de passe
        <input
          placeholder="John Doe"
          name="password"
          id="password"
          type="password"
        />
      </label>
      <MyButton onClick={} label="Se connecter" />
    </form>
  );
};

export default Login;
