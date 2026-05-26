export type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3333/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}