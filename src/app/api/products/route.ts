import { getProducts } from "@/app/lib/productStoreClient";

export async function GET(){
    const res = await getProducts();
    return Response.json(res, {status:200})
}

