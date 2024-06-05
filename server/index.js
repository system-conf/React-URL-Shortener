const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Express uygulamasını oluşturun
const app = express();

// Middleware'leri kullanın
app.use(bodyParser.json()); // JSON verilerini işlemek için bodyParser kullanın
app.use(cors()); // CORS politikalarını geçersiz kılın

// URL veritabanı dosyası
const dbFilePath = path.join(__dirname, 'urls.json');

// Rastgele kısa ID oluşturmak için bir fonksiyon oluşturun
function generateShortId(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let shortId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    shortId += chars[randomIndex];
  }

  return shortId;
}

// URL veritabanını yükle
function loadDatabase() {
  if (!fs.existsSync(dbFilePath)) {
    return {};
  }
  const data = fs.readFileSync(dbFilePath, 'utf8');
  return JSON.parse(data);
}

// URL veritabanını kaydet
function saveDatabase(db) {
  const data = JSON.stringify(db, null, 2);
  fs.writeFileSync(dbFilePath, data, 'utf8');
}

// Kısa URL oluşturma endpoint'i
app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortId = generateShortId(6);
  const shortUrl = `https://sulo.uno/${shortId}`;

  const db = loadDatabase();
  db[shortId] = longUrl;
  saveDatabase(db);

  res.json({ shortUrl });
});

// Kısa URL'ye yönlendirme endpoint'i
app.get('/:shortId', (req, res) => {
  const shortId = req.params.shortId;

  const db = loadDatabase();
  const longUrl = db[shortId];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

// Sunucuyu başlatın
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
