import http from "@/lib/HttpClient";
import type { ProductResponse, ProductsRequestParams } from "@/typings/product";

class ProductApi {
  static async getProductsByCategory(category: string) {
    return await http.post<ProductsRequestParams, ProductResponse[]>(
      "/product/find",
      {
        category,
        limit: 10,
      }
    );
  }
}

export default ProductApi;
