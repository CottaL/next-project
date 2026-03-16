export default function Input({ id, name, type }: { id: string, name: string, type: string }) {
    return (
        <input className="border border-gray-300 rounded-md p-2" id={id} name={name} type={type} />
    );
}   