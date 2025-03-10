import { occupiedCompartments } from "app/lib/productStoreClient";

export async function GET(){
    const res = occupiedCompartments();
    return Response.json(res, {status:200})
}