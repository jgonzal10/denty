import fs from 'fs';
import path from 'path';
import { Product } from '../types/Product';

const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'products.json');


/**
 * get all available products
 *
 * @returns An array of Product objects.
 */

export const getProducts = (): Product[] => {
    const productList:Product[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return productList;
 };

 /**
 * Update product list file
 *
 * @returns void
 */

 export const updateProductList = (products: Product[]): void  => {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
 };

/**
 * get total amount of products
 *
 * @returns total
 */

 export const getTotalProducts = (): number => {
   const productList:Product[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
   const total = productList.reduce((counter, product)=>{return counter + product.availableQuantity}, 0)
   return total;
};

/**
 * get total amount of occupied compartments
 *
 * @returns occupiedCompartments
 */
export const occupiedCompartments = (): number => {
   const productList:Product[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
   const emptyCompartments = productList.filter((product)=>product.availableQuantity===0)
   return productList.length -emptyCompartments.length;
};




