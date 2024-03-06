// import http package
const http = require("http");
// debug package
const debug = require("debug")("node-angular");
// import express app
const app = require("./backend/app");
// get port from environment variables or use 3000 as default
const port = process.env.PORT || 3000;

app.set("port", port);
// create server
const server = http.createServer(app);

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle server errors
server.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Handle successful server startup
server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Server listening on ${bind}`);
});
