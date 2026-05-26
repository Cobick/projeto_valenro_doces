import express from "express";
import cors from "cors";

import { prisma } from "./lib/prisma";

const app = express();

app.use(cors());
app.use(express.json());

/*
|--------------------------------------------------------------------------
| TESTE API
|--------------------------------------------------------------------------
*/
app.get("/", async (_, response) => {
  return response.json({
    message: "Backend Valenro Doces funcionando 🍫",
  });
});

/*
|--------------------------------------------------------------------------
| LISTAR PRODUTOS
|--------------------------------------------------------------------------
*/
app.get("/products", async (_, response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return response.json(products);
  } catch (error) {
    return response.status(500).json({
      error: "Erro ao buscar produtos",
    });
  }
});

/*
|--------------------------------------------------------------------------
| CRIAR PRODUTO
|--------------------------------------------------------------------------
*/
app.post("/products", async (request, response) => {
  try {
    const { title, category, description, image, price } =
      request.body;

    const product = await prisma.product.create({
      data: {
        title,
        category,
        description,
        image,
        price: Number(price),
      },
    });

    return response.status(201).json(product);
  } catch (error) {
    return response.status(500).json({
      error: "Erro ao criar produto",
    });
  }
});

/*
|--------------------------------------------------------------------------
| START SERVER
|--------------------------------------------------------------------------
*/
app.listen(3333, () => {
  console.log("🚀 Server running on http://localhost:3333");
});