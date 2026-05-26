import { ShoppingBag } from "lucide-react";

import { useCartStore } from "../store/cart-store";

type Props = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
};

export function ProductCard({
  id,
  image,
  title,
  category,
  price,
}: Props) {
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    addItem({
      id,
      image,
      title,
      price,
    });
  }

  return (
    <div
      className="
        group
        bg-white
        rounded-[32px]
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      {/* IMAGEM */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[320px]
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />
      </div>

      {/* CONTEÚDO */}
      <div className="p-6">
        <span
          className="
            text-sm
            text-[var(--primary)]
            font-medium
          "
        >
          {category}
        </span>

        <h3
          className="
            text-2xl
            font-bold
            mt-2
            text-[var(--chocolate)]
          "
        >
          {title}
        </h3>

        <div
          className="
            flex
            items-center
            justify-between
            mt-6
          "
        >
          <strong
            className="
              text-2xl
              text-[var(--chocolate)]
            "
          >
            R$ {price.toFixed(2)}
          </strong>

          <button
            onClick={handleAddToCart}
            className="
              w-14
              h-14
              rounded-2xl
              bg-[var(--primary)]
              text-white
              flex
              items-center
              justify-center
              hover:scale-110
              transition-all
            "
          >
            <ShoppingBag size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}