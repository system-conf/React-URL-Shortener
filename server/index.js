const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express uygulamasını oluşturun
const app = express();

// Middleware'leri kullanın
app.use(bodyParser.json()); // JSON verilerini işlemek için bodyParser kullanın
app.use(cors()); // CORS politikalarını geçersiz kılın

// Geçici hafıza tabanlı veritabanı
const urlDatabase = {};

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

// Kısa URL oluşturma endpoint'i
app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortId = generateShortId(6);
  const shortUrl = `https://sulo.uno/${shortId}`;

  // Geçici veritabanına kaydet
  urlDatabase[shortId] = longUrl;

  res.json({ shortUrl });
});

// Kısa URL'ye yönlendirme endpoint'i
app.get('/:shortId', (req, res) => {
  const shortId = req.params.shortId;

  const longUrl = urlDatabase[shortId];

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
