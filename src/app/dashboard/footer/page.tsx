
export default async function Footer() {
   let occupiedCompartments = 0;
   try {
      const response = await fetch("http://localhost:3000/api/compartments");
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      occupiedCompartments = await response.json();
   } catch (error) {
      console.error("Failed to fetch amount:", error);
   }


   let totalProducts = 0;
   try {
      const response = await fetch("http://localhost:3000/api/total");
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      totalProducts = await response.json();
   } catch (error) {
      console.error("Failed to fetch total:", error);
   }
   return (
      <footer className="bg-gray-800 text-white py-6">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="text-right"></div>
               <div className="flex space-x-4">
                  <div className="hover:text-gray-400" >Total Products {totalProducts}</div>
                  <div className="hover:text-gray-400">Occupied Compartments {occupiedCompartments}</div>
               </div>
            </div>
         </div>
      </footer>

   )
}