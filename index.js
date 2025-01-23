const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Підключення dotenv для роботи з .env файлами
require('dotenv').config();

// Middleware для обробки даних форми
app.use(express.urlencoded({ extended: true }));

// HTML форма для введення імені
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/greet">
            <label for="name">Enter your name:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Обробка даних з форми
app.post('/greet', (req, res) => {
    const userName = req.body.name;
    const aaaValue = process.env.AAA;  // Зчитуємо значення з змінної середовища
    res.send(`Hello, ${userName}. You are on port ${port}! The Vallue of AAA is ${aaaValue}.`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
