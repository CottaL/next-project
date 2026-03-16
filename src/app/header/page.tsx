"use client";
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">My Application</h1>
        <nav>   
        <a href="/" className="mr-4 hover:underline">Home</a>
        <a href="/about" className="mr-4 hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}