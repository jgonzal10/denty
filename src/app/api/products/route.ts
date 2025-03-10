import { getProducts } from "app/lib/productStoreClient";

export async function GET(){
    const res = getProducts();
    return Response.json(res, {status:200})
}

