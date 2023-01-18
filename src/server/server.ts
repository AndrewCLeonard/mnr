// this file will import jsx for server-side rendering
import express from "express";
import os from "node:os";

import config, { PORT } from "./config";
console.log({ PORT });

const server = express();

// middleware: serve static assets from the /dist directory
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading...",
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.log(
    `Express is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});
