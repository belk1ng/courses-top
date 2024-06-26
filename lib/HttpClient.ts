const SECONDS_IN_A_DAY = 60 * 60 * 24;

class HttpClient {
  constructor(private baseURL: string) {}

  private async request<T = void>(
    uri: string,
    options?: RequestInit
  ): Promise<T> {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
      next: {
        revalidate: SECONDS_IN_A_DAY,
        ...options?.next,
      },
    };

    const response = await fetch(`${this.baseURL}${uri}`, requestOptions);
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  }

  public async get<T = void>(uri: string): Promise<T> {
    return this.request<T>(uri);
  }

  public async post<T extends Record<string, unknown>, U = void>(
    uri: string,
    data: T,
    options?: RequestInit
  ): Promise<U> {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    };

    return this.request<U>(uri, requestOptions);
  }
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
const http = new HttpClient(baseURL + "/api");

export default http;
