import { edenTreaty } from "@elysiajs/eden";
import type { App } from "./index";

const app = edenTreaty<App>("http://localhost:3000");

// data is typed
const { data } = await app.get();

const { data: data2 } = await app.json.get();

console.log("data", data, "data2", data2);
