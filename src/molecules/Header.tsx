import Link from "next/link";
import { getSession } from "../app/lib/session";
import { LogoutAction } from "../app/auth/auth.actions";

export default async function Header() {
    const session = await getSession();

    return (
        <header className="bg-gray-100">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-center p-4">Mon site e-commerce</h1>
                <div className="grow">
                    <div className="flex items-center justify-center gap-4 md:gap-8">
                        <Link className="text-[#13475A] hover:text-[#13475A]" href="/">Home</Link>
                        <Link className="text-[#13475A] hover:text-[#13475A]" href="/admin/product">Create Product</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                    {session ? (
                        <>
                            <span className="text-sm text-gray-600">{session.name}</span>
                            <form action={LogoutAction}>
                                <button
                                    type="submit"
                                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                                >
                                    Se deconnecter
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Link className="text-blue-500 hover:text-blue-700 text-sm" href="/auth/login">
                                Se connecter
                            </Link>
                            <Link className="text-blue-500 hover:text-blue-700 text-sm" href="/auth/signup">
                                S&apos;inscrire
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
