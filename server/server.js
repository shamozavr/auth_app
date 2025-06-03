import express from "express";
import cors from "cors";
import { log } from "console";

const app = express();
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get('/', (req, resp) => {

  resp.status(200).json({
    id: 1,
    name: 'ALwx'
  })
})

app.post('/signin', (req, resp) => {
  console.log(req.body)
  resp.json('sign in success')
})

app.listen(4000, () => console.log('Server Started'))