export type CreateReviewRequestParams = {
  name: string;
  title: string;
  rating: number;
  description: string;
  productId: string;
};

export interface ReviewResponse {
  message: string;
}
