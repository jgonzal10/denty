import { Product } from "app/types/Product";
import ProductWithdrawn from "./productWithdrawnClient";

export default async function ProductWithdrawnPage({ params }: { params: { id: string } }){
    const { id } = await params


    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product: Product = await response.json();
    return (
        <ProductWithdrawn product={product} />
    );

}