import { getProducts } from "@/app/lib/productStoreClient";

export async function GET(){
    const res = await getProducts();
    console.log(res)
    return Response.json(res, {status:200})
}

