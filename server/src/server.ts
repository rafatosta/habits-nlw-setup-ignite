import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return "hello word";
});

app.listen({
  port: 3333,
});
