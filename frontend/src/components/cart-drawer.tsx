import { X, Trash2 } from "lucide-react";

import { useCartStore } from "../store/cart-store";
import { useUIStore } from "../store/ui-store";
import { generateWhatsAppMessage } from "../utils/whatsapp";

export function CartDrawer() {
  const items = useCartStore((state) => state.items);

  const subtotal = useCartStore(
    (state) => state.subtotal()
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const isCartOpen = useUIStore(
    (state) => state.isCartOpen
  );

  const closeCart = useUIStore(
    (state) => state.closeCart
  );

  function handleWhatsAppOrder() {
  const url = generateWhatsAppMessage(
    items,
    subtotal
  );

  window.open(url, "_blank");
}

  if (!isCartOpen) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={closeCart}
        className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-50
        "
      />

      {/* DRAWER */}
      <aside
        className="
          fixed
          top-0
          right-0
          h-screen
          w-full
          max-w-md
          bg-white
          z-50
          shadow-2xl
          flex
          flex-col
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
            border-[var(--border)]
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-[var(--chocolate)]
            "
          >
            Seu Carrinho
          </h2>

          <button
            onClick={closeCart}
            className="
              w-10
              h-10
              rounded-full
              hover:bg-zinc-100
              flex
              items-center
              justify-center
              transition-all
            "
          >
            <X />
          </button>
        </div>

        {/* PRODUTOS */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-zinc-500">
              Seu carrinho está vazio.
            </p>
          ) : (
            <div className="space-y-5">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="
                    flex
                    gap-4
                    bg-zinc-50
                    rounded-2xl
                    p-4
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-20
                      h-20
                      rounded-xl
                      object-cover
                    "
                  />

                  <div className="flex-1">
                    <h3
                      className="
                        font-semibold
                        text-[var(--chocolate)]
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="
                      text-red-500
                      hover:scale-110
                      transition-all
                    "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div
          className="
            border-t
            border-[var(--border)]
            p-6
            space-y-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-lg">
              Subtotal
            </span>

            <strong
              className="
                text-2xl
                text-[var(--chocolate)]
              "
            >
              R$ {subtotal.toFixed(2)}
            </strong>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="
              w-full
              h-14
              rounded-2xl
              bg-green-500
              text-white
              font-semibold
              hover:scale-[1.02]
              transition-all
            "
          >
            Finalizar no WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}