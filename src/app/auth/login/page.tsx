"use client";
import { useActionState } from "react";
import { LoginUserAction } from "../auth.actions";
import Link from "next/link";

const Login = () => {
  const [state, formAction] = useActionState(LoginUserAction, {});

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Se connecter</h1>
      <form className="flex flex-col items-center gap-3 w-80" action={formAction}>
        <label className="flex flex-col items-center w-full" htmlFor="email">
          Email
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="johndoe@example.com"
            name="email"
            id="email"
            type="email"
            required
          />
        </label>
        <label className="flex flex-col items-center w-full" htmlFor="password">
          Mot de passe
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="********"
            name="password"
            id="password"
            type="password"
            required
          />
        </label>
        <input
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 w-full"
          type="submit"
          value="Se connecter"
        />
        {state?.error && (
          <p className="text-red-500 text-sm">{state.error}</p>
        )}
      </form>
      <p className="mt-4 text-sm">
        Pas encore de compte ?{" "}
        <Link className="text-blue-500 hover:text-blue-700" href="/auth/signup">
          S&apos;inscrire
        </Link>
      </p>
    </div>
  );
};

export default Login;
