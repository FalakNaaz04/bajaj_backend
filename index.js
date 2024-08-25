const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase()
  );
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? [lowercaseAlphabets.sort().pop()]
    : [];

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "21BCI0006",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
