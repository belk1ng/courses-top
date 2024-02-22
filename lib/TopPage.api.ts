import http from "@/lib/HttpClient";
import type { SubCategory, SubCategoryRequestParams } from "@/typings/menu";
import type { PageParamsResponse } from "@/typings/page-params";

export const enum RootCategories {
  Courses,
  Services,
  Books,
  Products,
}

class TopPageApi {
  static async getSubmenuByCategory(firstCategory = RootCategories.Courses) {
    try {
      return await http.post<SubCategoryRequestParams, SubCategory[]>(
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
