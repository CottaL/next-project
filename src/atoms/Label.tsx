export default function Label({ htmlFor, label }: { htmlFor: string, label: string }) {
    return (
        <label className="block text-sm font-medium text-gray-700" htmlFor={htmlFor}>{label}</label>
    );
}