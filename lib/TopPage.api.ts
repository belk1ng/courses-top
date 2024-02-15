import http from "@/lib/HttpClient";
import type { MenuResponse, SubmenuRequestParams } from "@/typings/menu";
import type { PageParamsResponse } from "@/typings/page-params";

enum RootCategories {
  Courses,
}

class TopPageApi {
  static async getSubmenuByCategory(firstCategory = RootCategories.Courses) {
    try {
      return await http.post<SubmenuRequestParams, MenuResponse[]>(
        "/top-page/find",
        {
          firstCategory,
        }
      );
    } catch (error) {
      console.log("SubmenuByCategoryRequestError: ", error);
      return null;
    }
  }

  static async getPageDetailsByAlias(alias: string) {
    try {
      return await http.get<PageParamsResponse>(`/top-page/byAlias/${alias}`);
    } catch (error) {
      console.log("PageDetailsRequestError: ", error);
      return null;
    }
  }
}

export default TopPageApi;
