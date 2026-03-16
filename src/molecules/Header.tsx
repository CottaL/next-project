import Link from "next/link";
import logo from "../images/coorporatelogo.png";
export default function Header() {
    return (

        <header className="bg-[#B7CDA6]">
            <div className="flex items-center justify-between ">
                <h1 className="text-2xl font-bold text-center p-4">Mon site e-commerce</h1>
                <div className="grow">
                    <div className="flex items-center justify-center gap-4 md:gap-8">
                        <Link className="text-[#13475A] hover:text-[#13475A]" href="/">Home</Link>
                        <Link className="text-[#13475A] hover:text-[#13475A]" href="/admin/product">Create Product</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}