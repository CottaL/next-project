export default function Label({ htmlFor, label, hidden }: { htmlFor: string, label: string, hidden?: boolean }) {
    return (
        <label className="block text-sm font-medium text-gray-700" htmlFor={htmlFor} hidden={hidden}>
            {label}
        </label>
    );
}