import http from "@/lib/HttpClient";

class ProductApi {
  static async getProductsByCategory(category: string) {
    return await http.post("/product/find", {
      category,
      limit: 10,
    });
  }
}

export default ProductApi;
