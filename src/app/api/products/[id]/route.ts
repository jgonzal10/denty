import { getProducts, updateProductList } from "app/lib/productStoreClient";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const products=getProducts()
    const { id } = await params

    const product = products.find((p) => p.id === id);
    return Response.json(product)
  }


  export async function PUT (req: Request) {
    const { id, withdrawnQuantity } = await req.json();

    try{
        const products = getProducts()

        const productToUpdateIndex = products.findIndex((product)=>product.id === id.toString());

        const product = products[productToUpdateIndex];

        if(product.availableQuantity>= withdrawnQuantity){
            products[productToUpdateIndex] = {
                ...product,
                availableQuantity: product.availableQuantity- withdrawnQuantity
            }
            updateProductList(products)
            return Response.json({
                product
              });
        }else{
            Response.json({message:"Withdrawn quantity not available"});
    
        }
        }catch(error){
            console.error("Error loading product: ", error);
            Response.json({message:"Failed to load product"})
        }
  };