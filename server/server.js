import express from "express";
import cors from "cors";
import { error, log } from "console";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
const prisma = new PrismaClient();

app.get('/', (req, resp) => {
  resp.status(200).json({
    id: 1,
    name: 'ALwx'
  })
})

app.post('/signin', (req, resp) => {
  const { email, password } = req.body;
  const users = [{ email: 'admin@mail.ru', password: '1234Asd' }, { email: 'user@mail.ru', password: '1234' }]
  const user = users.find(user => user.email === email && user.password === password)

  if (user) {
    resp.status(200).json({ message: 'Вы успешно авторизированы' })
  } else {
    resp.status(401).json({ error: 'Пользователь не найден' })
  }
})

app.post('/signup', async (req, resp) => {
  console.log("SIGNUP")
  // if (!req.body.email || !req.body.password) {
  //   return resp.status(400).json({ error: 'Вы должны передать email и password' })
  // }
  const { email, password } = req.body;
  // const [email, password] = ['asd@mail.ru', 'Asdf123.']

  const isUserExists = await prisma.user.findUnique({ where: { email } });
  if (isUserExists) {
    return resp.status(400).json({ error: "Login is already exists" });
  }

  await prisma.user.create({
    data: {
      email,
      password,
    }
  })

  return resp.status(200).json({ error: "OK" });

  // const users = [{ email: 'admin@mail.ru', password: '1234' }, { email: 'user@mail.ru', password: '1234' }]
  // const user = users.some(user => user.email === email)
  // 
  // if (user) {
  //   resp.status(400).json({ error: 'Пользователь с таким e-mail уже существует' })
  // } else {
  //   users.push({ email, password })
  //   resp.status(201).json({ message: 'Вы успешно зарегистрированы' })
  // }
})

app.listen(4000, () => console.log('Server Started'))