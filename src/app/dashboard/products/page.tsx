import { Product } from "app/types/Product";
import ProductPage from "./[id]/page";

export default async function ProductsPage() {
   let products = [];
   try {
      const response = await fetch("http://localhost:3000/api/products");
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      products = await response.json();
   } catch (error) {
      console.error("Failed to fetch products:", error);
      products = [{ id: "1", name: "Fallback Product" }];
   }
   return (
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch'>
          {products.map((product:Product, i:number) => {
            return (
               <li key={i}>
               <ProductPage product={product} />
            </li>
            )
          })}
      </ul>
   );
  }