import type { CartItem } from "../store/cart-store";

export function generateWhatsAppMessage(
  items: CartItem[],
  subtotal: number
) {
  const phone = "5514999999999";

  const message = `
Olá! Gostaria de fazer um pedido na Valenro Doces 🍫✨

${items
  .map(
    (item) =>
      `• ${item.title} - R$ ${item.price.toFixed(2)}`
  )
  .join("\n")}

Subtotal: R$ ${subtotal.toFixed(2)}
`;

  const encodedMessage =
    encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}