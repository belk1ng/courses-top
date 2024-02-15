import http from "@/lib/HttpClient";

class ProductApi {
  static async getProductsByCategory(category: string) {
    const products = await http.post("/product/find", {
      category,
      limit: 10,
    });

    return products;
  }
}

export default ProductApi;
