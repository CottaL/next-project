import CreateUserAction from "../auth.actions";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Creer un compte</h1>
      <form className="flex flex-col items-center gap-3 w-80" action={CreateUserAction}>
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
        <label className="flex flex-col items-center w-full" htmlFor="name">
          Nom
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="John Doe"
            name="name"
            id="name"
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
          value="S'inscrire"
        />
      </form>
      <p className="mt-4 text-sm">
        Deja un compte ?{" "}
        <Link className="text-blue-500 hover:text-blue-700" href="/auth/login">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

export default Signup;
