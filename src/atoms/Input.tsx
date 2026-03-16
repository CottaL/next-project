export default function Input({ id, name, type, defaultValue, value, hidden, readOnly }: { id: string, name: string, type: string, defaultValue?: string, value?: string, hidden?: boolean, readOnly?: boolean }) {
    return (
        <input className="border border-gray-300 rounded-md p-2" id={id} name={name} type={type} defaultValue={defaultValue} value={value} hidden={hidden} readOnly={readOnly} />
    );
}   