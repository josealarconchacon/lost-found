const express = require("express");

// create an express app
const app = express();

app.use("/api/posts", (req, res, next) => {
  // return data in json format
  const posts = [
    {
      id: "ghttreoe88",
      title: "First server-side post",
      content: "Hey, this is coming for the server",
    },
    {
      id: "ghttreoe008",
      title: "Second server-side post",
      content: "Coming for the server.....",
    },
  ];
  res.status(200).json({
    message: "Fetch data successfully",
    posts: posts,
  });
});

// export express app
module.exports = app;
