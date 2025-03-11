import { GET } from "@/app/api/products/route";

describe('GET /api/products', () => {
    it('should return a JSON response with a list of products', async () => {
        const mockGetProducts = jest.fn().mockResolvedValue([{ id: 1, name: 'Product 1', availableQuantity: 2 }]);
        jest.spyOn(require('@/app/lib/productStoreClient'), 'getProducts').mockImplementation(mockGetProducts);

        const response = await GET();
        const json = await response.json();
        expect(response.status).toBe(200);
        expect(json).toEqual([{ id: 1, name: 'Product 1', availableQuantity: 2 }]);
        expect(response.headers.get('content-type')).toBe('application/json');
    });
});