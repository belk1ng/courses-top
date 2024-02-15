import http from "@/lib/HttpClient";

enum RootCategories {
  Courses,
}

class TopPageApi {
  static async getSubmenuByCategory(firstCategory = RootCategories.Courses) {
    const menu = await http.post("/top-page/find", {
      firstCategory,
    });
    return menu;
  }

  static async getPageDetailsByAlias(alias: string) {
    const details = await http.get(`/top-page/byAlias/${alias}`);
    return details;
  }
}

export default TopPageApi;
