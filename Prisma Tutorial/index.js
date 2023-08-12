const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const PORT = 3000;

// MiddleWare
app.use(express.json());

app.get('/', async (req, res) => {
   const allUsers = await prisma.user.findMany();
   res.json(allUsers)
})

app.post('/', async(req, res) => {
   const newUser = await prisma.user.create({ data: req.body })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))