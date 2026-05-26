import { motion } from "framer-motion";

import { Button } from "./button";
import { Container } from "./container";

export function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        pt-28
        pb-20
      "
    >
      <Container>
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              flex
              flex-col
              justify-center
            "
          >
            <span
              className="
                bg-[var(--soft-pink)]
                text-[var(--primary)]
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                inline-flex
                w-fit
                mb-6
              "
            >
              Doces artesanais premium ✨
            </span>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-[1.1]
                text-[var(--chocolate)]
                max-w-2xl
              "
            >
              Sabores que
              <span className="text-[var(--primary)]">
                {" "}encantam
              </span>
            </h1>

            <p
              className="
                text-lg
                text-zinc-600
                mt-7
                leading-relaxed
                max-w-xl
              "
            >
              Conheça os doces mais irresistíveis da
              Valenro Doces. Um toque premium,
              moderno e artesanal para transformar
              qualquer momento especial.
            </p>

            {/* BOTÕES */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                mt-10
              "
            >
              <Button title="Montar Pedido" />

              <button
                className="
                  px-6
                  py-3
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-white
                  hover:shadow-md
                  transition-all
                "
              >
                Ver Cardápio
              </button>
            </div>

            {/* BADGES */}
            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-12
              "
            >
              <div
                className="
                  bg-white
                  px-5
                  py-3
                  rounded-2xl
                  shadow-md
                "
              >
                🍫 Chocolate Premium
              </div>

              <div
                className="
                  bg-white
                  px-5
                  py-3
                  rounded-2xl
                  shadow-md
                "
              >
                🚚 Pedido via WhatsApp
              </div>

              <div
                className="
                  bg-white
                  px-5
                  py-3
                  rounded-2xl
                  shadow-md
                "
              >
                ✨ Produção Artesanal
              </div>
            </div>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              justify-center
            "
          >
            {/* EFEITO */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                bg-[var(--primary)]
                opacity-10
                blur-3xl
                rounded-full
              "
            />

            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
              alt="Doces gourmet"
              className="
                relative
                w-full
                max-w-[520px]
                h-[620px]
                object-cover
                rounded-[40px]
                shadow-2xl
              "
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}