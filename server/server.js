const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const users = {};

io.on("connection", (socket) => {
  if (!users[socket.id]) {
    users[socket.id] = { id: socket.id };
  }

  socket.on("rtc_ID", () => {
    socket.emit("rtc_yourID", socket.id);
    io.sockets.emit("rtc_allUsers", users);
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
  });

  socket.on("rtc_callUser", (data) => {
    io.to(data.userToCall).emit("rtc_hey", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("rtc_acceptCall", (data) => {
    io.to(data.to).emit("rtc_callAccepted", data.signal);
  });
});

server.listen(8000, () => console.log("server is running on port 8000"));
