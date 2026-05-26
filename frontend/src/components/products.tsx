import { useEffect, useState } from "react";

import { ProductCard } from "./product-card";
import { Container } from "./container";

import { getProducts } from "../services/products";

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold mb-10 text-[var(--chocolate)]">
          Nossos Produtos
        </h2>

        {loading && (
          <p className="text-zinc-500">
            Carregando produtos...
          </p>
        )}

        {!loading && products.length === 0 && (
          <p className="text-zinc-500">
            Nenhum produto encontrado.
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}