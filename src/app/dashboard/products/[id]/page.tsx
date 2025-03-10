'use client'
import { Product } from "app/types/Product";
import Link from "next/link";

type ProductPageProps ={
   product:Product
}

export default function ProductPage({ product }: ProductPageProps) {
   return (
      
      <div className='bg-gradient-to-r from-slate-100 to-gray-100 border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-100 transition-all transform hover:scale-105 mb-6 h-full flex flex-col cursor-pointer min-h-52'>
         <Link
            href={`/dashboard/products/${product!.id}/productWithdrawn`}
            legacyBehavior
         >
         <a className='flex flex-col flex-grow'>
               <span className='text-2xl font-semibold text-gray-800 transition-colors'>{product!.name}</span>
               <p className='text-gray-700 mt-4 line-clamp-3'>Quantity: {product!.availableQuantity}</p>
            </a>
         </Link>
      </div>
    );
  }