import { Categories } from "../components/categories";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { Products } from "../components/products";
import { CartDrawer } from "../components/cart-drawer";

import { MainLayout } from "../layouts/main-layout";

export function Home() {
  return (
    <MainLayout>
      <Navbar />
      <CartDrawer />

      <div className="pt-24">
        <Hero />
        <Categories />
        <Products />
      </div>
    </MainLayout>
  );
}