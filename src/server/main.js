const express = require("express");
const ViteExpress = require("vite-express");

const app = express();
app.use(express.json())

var sillyDestinies = [
  "You will find a pair of matching socks today",
  "You will discover a hidden talent for juggling marshmallows",
  "You will accidentally speak in rhymes for the entire day",
  "You will encounter a talking squirrel who will give you profound life advice",
  "You will win a lifetime supply of bubblegum",
  "You will become the world champion of thumb wrestling",
  "You will find a pot of gold at the end of a rainbow-shaped pretzel",
  "You will invent a new dance move that becomes an international sensation",
  "You will receive a letter from a penguin inviting you to a formal dinner",
  "You will discover that you can talk to plants and they give you gardening tips",
  "You will have the power to make any food taste like your favorite dessert",
  "You will be able to communicate with animals, but only when they're yawning",
  "You will find a magic hat that grants you the ability to teleport to the nearest ice cream parlor",
  "You will be invited to join a secret society of professional ticklers",
  "You will be mistaken for a famous celebrity and asked for autographs",
  "You will find a genie lamp and get three wishes, but all of them will involve silly pranks",
  "You will become the mayor of a town where everyone speaks in pig Latin",
  "You will become a renowned expert in identifying cloud shapes",
  "You will have the power to turn any object into a giant balloon",
  "You will discover a hidden treasure map, leading you to a room full of rubber duckies"
];



app.get("/api/getDestiny", (req, res) => {
  let destiny = sillyDestinies[Math.floor(Math.random() * sillyDestinies.length)]
  res.status(200).send(destiny)
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
