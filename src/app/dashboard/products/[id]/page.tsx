// import { Product } from "app/types/Product";
import Link from "next/link";


// interface ProductPageProps {
//    product:Product
//  }
 
export default async function ProductPage() {
    return (
      
      <div className='bg-gradient-to-r from-slate-100 to-gray-100 border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-100 transition-all transform hover:scale-105 mb-6 h-full flex flex-col cursor-pointer min-h-52'>
         <Link
            href={`/products/1`}
            legacyBehavior
         >
            <a className='flex flex-col flex-grow'>
               <span className='text-2xl font-semibold text-gray-800 transition-colors'>Name</span>
               <p className='text-gray-700 mt-4 line-clamp-3'>quantity</p>
            </a>
         </Link>
      </div>
    );
  }