import { getProducts, updateProductList } from "app/lib/productStoreClient";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const products=getProducts()

    const { id } = await params
    if(!id){
      Response.json({message:"Product not found"}, {status:404})
    }

    const product = products.find((p) => p.id === id);
    return Response.json(product, {status:200})
  }


  export async function PUT ( request: Request,
    { params }: { params: Promise<{ id: string, withdrawnQuantity:number }> }) {
      const body = await request.json();
    const { id } = await params;
    const withdrawQuantity= parseInt(body.withdrawQuantity)
    try{
        const products = getProducts()

        const productToUpdateIndex = products.findIndex((product)=>product.id === id );

        const product = products[productToUpdateIndex];

        if(product.availableQuantity>= withdrawQuantity){
            products[productToUpdateIndex] = {
                ...product,
                availableQuantity: product.availableQuantity- withdrawQuantity
            }
            updateProductList(products)
            return Response.json({
                product
              }, {status:200});
        }else{
            Response.json({message:"Withdrawn quantity not available"}, {status:400});
    
        }
        }catch(error){
            console.error("Error loading product: ", error);
            Response.json({message:"Failed to load product"}, {status:500})
        }
  };