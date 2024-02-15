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
    };

    try {
      const response = await fetch(`${this.baseURL}${uri}`, requestOptions);
      if (!response.ok) {
        return Promise.reject(response);
      }

      return response.json();
    } catch (error) {
      console.log("Error during request: ", error);
      throw error;
    }
  }

  public async get<T = void>(uri: string): Promise<T> {
    try {
      const response = await this.request<T>(uri);
      return response;
    } catch (error) {
      console.log("Error during GET request: ", error);
      throw error;
    }
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

    try {
      const response = await this.request<U>(uri, requestOptions);
      return response;
    } catch (error) {
      console.log("Error during POST request: ", error);
      throw error;
    }
  }
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
const http = new HttpClient(baseURL);

export default http;
