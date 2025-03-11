import { GET, PUT } from "@/app/api/products/[id]/route";
import * as productStoreClient from '@/app/lib/productStoreClient';

describe('GET /api/products/[id]/route', () => {
    it('should return a product', async () => {
        const mockGetProducts = jest.fn().mockResolvedValue([{ id: "1", name: 'Product 1', availableQuantity: 2 }]);
        jest.spyOn(productStoreClient, 'getProducts').mockImplementation(mockGetProducts);
        const params = Promise.resolve({ id: '1' });
        const response = await GET(new Request('http://localhost'),{params});
        const json = await response.json();
        expect(response.status).toBe(200);
        expect(json).toEqual({ id: "1", name: 'Product 1', availableQuantity: 2 });
    });

    it('should return a 404 error', async () => {
        const mockGetProducts = jest.fn().mockResolvedValue([{ id: "1", name: 'Product 1', availableQuantity: 2 }]);
        jest.spyOn(productStoreClient, 'getProducts').mockImplementation(mockGetProducts);
        const params = Promise.resolve({ id: '888' });
        const response = await GET(new Request('http://localhost'),{params});
        await response.json();
        expect(response.status).toBe(404);
    });
});


describe('PUT /api/products/[id]/route', () => {
    it('should update product quantity', async () => {
        const mockGetProducts = jest.fn().mockResolvedValue([{ id: "1", name: 'Product 1', availableQuantity: 5 },{ id: "2", name: 'Product 2', availableQuantity: 3 }]);
        jest.spyOn(productStoreClient, 'getProducts').mockImplementation(mockGetProducts);
        const mockUpdateProductList = jest.fn().mockResolvedValue([{ id: "1", name: 'Product 1', availableQuantity: 3 },{ id: "2", name: 'Product 2', availableQuantity: 3 }]);
        jest.spyOn(productStoreClient, 'updateProductList').mockImplementation(mockUpdateProductList);
        const params = Promise.resolve({ id: '1' ,withdrawnQuantity: 2});
        const response = await PUT(new Request('http://localhost',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:"1", withdrawQuantity:2}),
          }),{params});

        await response!.json();
        expect(response!.status).toBe(200);
  
    });
})