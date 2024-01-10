import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Homepage } from "./homepage";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <Homepage />)
  .post("/clicked", () => {
    console.log("clicked");
  })
  .get("/hello", () => {
    return <h1>Hello</h1>;
  })
  .get("/json", { a: 1, b: "hello" })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
