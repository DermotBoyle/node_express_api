const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const games = [
  { id: 1, name: "Arya" },
  { id: 2, name: "Sansa" },
  { id: 3, name: "Cercei" }
];

app.get("/api/game", (req, res) => {
  res.send(games);
});

app.get("/api/game/:id", (req, res) => {
  const game = games.find(target => target.id === parseInt(req.params.id));
  res.send(game);
});

app.post("/api/game", (req, res) => {
  const game = {
    id: games.length + 1,
    name: req.body.name
  };
  games.push(game);
  res.send(game);
});

app.put("/api/game/:id", (req, res) => {
  const game = games.find(target => target.id === parseInt(req.params.id));
  game.name = req.body.name;
  res.send(game);
});

app.delete("/api/game/:id", (req, res) => {
  const game = games.find(target => target.id === parseInt(req.params.id));

  const index = games.indexOf(game);
  games.splice(index, 1);
  res.send(game);
});

app.listen(port, () => console.log(`The server is ${port}`));
