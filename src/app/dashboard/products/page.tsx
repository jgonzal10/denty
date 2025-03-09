// import { Product } from "app/types/Product";
// import ProductPage from "./[id]/page";

export default async function ProductsPage() {
   // const response = await fetch("http://localhost:3000/api/products");
   // const products =await response.json()
   // console.log(products)
   return (
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch'>
                   {/* {products.map((i:number) => (
             <li key={i}>
             </li>
          ))} */}
          products
      </ul>
   );
  }