'use server'
import { redirect } from 'next/navigation'
 
export async function updateProduct(formData: FormData) {
    const id = formData.get('id');
    const withdrawQuantity = formData.get('withdrawQuantity');
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
          method: 'PUT',
          headers: {
             'Content-Type': 'application/json',
          },
          body: JSON.stringify({ withdrawQuantity }),
       });
       if (!response.ok) {
          throw new Error('Failed to withdrawing product');
       }
       await response.json();
  } catch (error) {
      console.error('Error withdrawing product units :', error);
  }

  redirect(`/dashboard/products`)
}