import { ReactNode } from "react";

export default function ContainerForm({ children }: { children: ReactNode }) {
    return (
        <div className=" mx-auto p-4 bg-gray-100 p-6">
            <div className="container mx-auto w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    );
}