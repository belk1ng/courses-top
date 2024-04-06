import http from "@/lib/HttpClient";
import type { Product, ProductsRequestParams } from "@/typings/product";

class ProductApi {
  static async getProductsByCategory(category: string) {
    return http.post<ProductsRequestParams, Product[]>("/product/find", {
      category,
      limit: 10,
    });
  }
}

export default ProductApi;
