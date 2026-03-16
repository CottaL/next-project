import Link from "next/link";

type CardProps = {
    id: number;
    title: string;
    description?: string;
    price?: string;
    children?: React.ReactNode;
};

export default function Card({ id, title, description, price, children }: CardProps) {
    return (
        <Link href={`/admin/product/${id}`}>
            <div className="bg-[#E8BB36] p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <h3 className="text-lg font-bold">{title}</h3>
                {description && <p>{description}</p>}
                {price && <p>Price: ${price}</p>}
                {children}
                <Link className="mt-4 hover:text-blue-[#13475A]" href={`/admin/product/update/${id}`}>Modify Product</Link>
            </div>
        </Link>
    );
}
