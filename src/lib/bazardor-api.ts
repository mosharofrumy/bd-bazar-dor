
import type { Category, Product } from "@/types/product";

const API_BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function fetchFromApi<T>(endpoint: string): Promise<T> {
  let lastError: unknown;

  for (const baseUrl of API_BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        next: { revalidate: 86400 },
      });

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${baseUrl}`,
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(
    `সব API থেকে ডেটা আনা যায়নি: ${String(lastError)}`,
  );
}

export async function getProducts(): Promise<Product[]> {
  return fetchFromApi<Product[]>("/products");
}

export async function getCategories(): Promise<Category[]> {
  return fetchFromApi<Category[]>("/categories");
}

export async function getProductsByCategory(
  slug: string,
): Promise<Product[]> {
  return fetchFromApi<Product[]>(
    `/products?category=${encodeURIComponent(slug)}`,
  );
}

export async function getProductById(
  id: number,
): Promise<Product> {
  return fetchFromApi<Product>(`/products/${id}`);
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category> {
  return fetchFromApi<Category>(
    `/categories/${encodeURIComponent(slug)}`,
  );
}
