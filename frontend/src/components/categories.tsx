import { Candy, Cake, IceCreamBowl, Cookie } from "lucide-react";

import { Container } from "./container";

const categories = [
  {
    title: "Trufas",
    icon: Candy,
  },

  {
    title: "Brownies",
    icon: Cookie,
  },

  {
    title: "Cones",
    icon: IceCreamBowl,
  },

  {
    title: "Bolos",
    icon: Cake,
  },
];

export function Categories() {
  return (
    <section className="pb-10">
      <Container>
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  bg-white/80
                  backdrop-blur-md
                  border
                  border-white
                  rounded-[32px]
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-[var(--soft-pink)]
                    flex
                    items-center
                    justify-center
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Icon
                    size={34}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[var(--chocolate)]
                  "
                >
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}