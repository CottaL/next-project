import { ReactNode } from "react";

export default function Label({ htmlFor, children, hidden }: { htmlFor: string, children: ReactNode, hidden?: boolean }) {
    return (
        <label className="block text-sm font-medium text-gray-700" htmlFor={htmlFor} hidden={hidden}>{children}</label>
    );
}