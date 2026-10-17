import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send('Hi baby')
})
app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})