import { ShoppingBag } from "lucide-react";

import { Container } from "./container";
import { Button } from "./button";

import { useCartStore } from "../store/cart-store";
import { useUIStore } from "../store/ui-store";

export function Navbar() {
  const totalItems = useCartStore(
    (state) => state.totalItems()
  );

  const openCart = useUIStore(
  (state) => state.openCart
  );

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-white/80
        border-b
        border-[var(--border)]
        shadow-sm
      "
    >
      <Container>
        <div className="h-24 flex items-center justify-between">
          {/* LOGO */}
          <div>
            <h1 className="text-2xl font-bold text-[var(--chocolate)]">
              Valenro
              <span className="text-[var(--primary)]">
                {" "}Doces
              </span>
            </h1>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="
                text-sm
                font-medium
                hover:text-[var(--primary)]
                transition-colors
              "
            >
              Início
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                hover:text-[var(--primary)]
                transition-colors
              "
            >
              Cardápio
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                hover:text-[var(--primary)]
                transition-colors
              "
            >
              Destaques
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                hover:text-[var(--primary)]
                transition-colors
              "
            >
              Contato
            </a>
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="
                relative
                w-11
                h-11
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
                hover:scale-105
                transition-all
              "
            >
              <ShoppingBag size={20} />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  bg-[var(--primary)]
                  text-white
                  text-xs
                  w-5
                  h-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                {totalItems}
              </span>
            </button>

            <div className="hidden md:block">
              <Button title="Montar Pedido" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}