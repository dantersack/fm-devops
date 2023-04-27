const hapi = require("@hapi/hapi");

process.on("SIGINT", () => process.exit(0));

async function start() {
  const server = hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true };
    },
  });

  await server.register({
    plugin: require("hapi-pino"),
    options: {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    },
  });

  await server.start();
  server.log(["INFO"], `Server running on port: ${process.env.PORT || 3000}`);
  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
