import { Product } from "app/types/Product";
import Form from "next/form";
import { updateProduct } from "./actions";


export default async function ProductWithdrawnPage({ params }: { params: any }) {
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product: Product = await response.json();
    const availableQuantity = product.availableQuantity;
    const name = product.name;
    return (
        <div className="bg-white p-6 rounded-lg
                            shadow-lg w-full max-w-lg">
            <span className='text-2xl font-semibold text-gray-800 transition-colors'>{name}</span>
            <p className='text-gray-700 mt-4 line-clamp-3'>Quantity: {availableQuantity}</p>

            <Form className="space-y-4" action={updateProduct}>
                <div>
                    <input type='hidden' name="id" value={product.id}></input>
                    <input
                        type="number" min="1" max={availableQuantity}
                        className="w-full px-4 py-2 border
                                       border-gray-300 rounded-md
                                       focus:outline-none focus:ring-2
                                       focus:ring-indigo-500 text-gray-600"
                        placeholder="Enter quantity" name="withdrawQuantity"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white
                                       bg-indigo-500 rounded-md
                                       hover:bg-indigo-600 focus:outline-none
                                       focus:bg-indigo-700"
                    >
                        Go
                    </button>
                </div>
            </Form>

        </div>
    );

}