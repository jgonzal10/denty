import { getProducts } from "@/app/lib/productStoreClient";

export async function GET(){
    const products = getProducts();
    const totalProducts = products.reduce((acc, product)=>{
        return acc + product.availableQuantity;
    },0)
    return Response.json(totalProducts, {status:200})
}

