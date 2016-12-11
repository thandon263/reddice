import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (rep, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(3000, () => console.log("Listening on PORT: 3000"));
