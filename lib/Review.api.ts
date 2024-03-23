import http from "@/lib/HttpClient";
import type {
  CreateReviewRequestParams,
  ReviewResponse,
} from "@/typings/review";

class ReviewApi {
  static async createReview(reviewValues: CreateReviewRequestParams) {
    return await http.post<CreateReviewRequestParams, ReviewResponse>(
      "/review/create-demo",
      reviewValues
    );
  }
}

export default ReviewApi;
