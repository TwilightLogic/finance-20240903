import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";

// import authors from "./authors";
// import books from "./books";

import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// 我们会在 /api/hello 路由中使用 Clerk 进行身份验证(middleware)
// app.get(
//   // ROUTE
//   "/hello",
//   // MIDDLEWARE
//   clerkMiddleware(),
//   // CONTROLLER
//   (c) => {
//     const auth = getAuth(c);

//     if (!auth?.userId) {
//       return c.json(
//         {
//           message: "Unauthorized",
//         },
//         401
//       );
//     }

//     return c.json({
//       userId: auth.userId,
//       message: `Hello ${auth.userId}!`,
//     });
//   }
// );

// app.route("/authors", authors);
// app.route("/books", books);

app.get("/hello", (c) => c.json({ message: "Hello World" }));

export const GET = handle(app);
export const POST = handle(app);
