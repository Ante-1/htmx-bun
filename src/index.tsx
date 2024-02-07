import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Homepage } from "./homepage";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <Homepage title="Hallo" />)
  .post("/clicked", () => {
    console.log("clicked");
  })
  .get("/hello", () => {
    return (
      <h1>
        <title>Jo</title>
        hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quaerat maiores nemo necessitatibus ad praesentium. Totam corporis aut
        natus rem harum fugit incidunt nesciunt, impedit, deleniti ea minus id
        placeat!
      </h1>
    );
  })
  .get("/json", { a: 1, b: "hello" })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
