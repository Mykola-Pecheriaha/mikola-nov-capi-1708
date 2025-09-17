import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 4000;
const DATA_FILE = './consultations.json';

app.use(cors());
app.use(bodyParser.json());

// Отримати всі записи
app.get('/api/consultations', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.json([]);
    try {
      const consultations = JSON.parse(data);
      res.json(consultations);
    } catch {
      res.json([]);
    }
  });
});

// Додати новий запис
app.post('/api/consultations', (req, res) => {
  const { name, phone, comment } = req.body;
  if (!name || !phone) return res.status(400).json({ error: 'Name and phone required' });
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let consultations = [];
    if (!err && data) {
      try {
        consultations = JSON.parse(data);
      } catch {}
    }
    const newConsultation = { name, phone, comment, date: new Date().toISOString() };
    consultations.push(newConsultation);
    fs.writeFile(DATA_FILE, JSON.stringify(consultations, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to save' });
      res.json(newConsultation);
    });
  });
});


// Обработчик для GET-запроса на корень
app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
