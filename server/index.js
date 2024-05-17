// Gerekli modülleri yükleyin
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Express uygulamasını oluşturun
const app = express();

// Middleware'leri kullanın
app.use(bodyParser.json()); // JSON verilerini işlemek için bodyParser kullanın
app.use(cors()); // CORS politikalarını geçersiz kılın

// URL veritabanını oluşturun
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
  // İstek gövdesinden uzun URL'yi alın
  const longUrl = req.body.longUrl;

  // Rastgele kısa bir ID oluşturun
  const shortId = generateShortId(6);

  // Kısa URL oluşturun
  const shortUrl = `https://sulo.uno/${shortId}`;

  // Kısa URL'yi ve uzun URL'yi eşleştirin ve veritabanına kaydedin
  urlDatabase[shortId] = longUrl;

  // Oluşturulan kısa URL'i yanıt olarak gönderin
  res.json({ shortUrl });
});

// Kısa URL'ye yönlendirme endpoint'i
app.get('/:shortId', (req, res) => {
  // Parametrelerden kısa ID'yi alın
  const shortId = req.params.shortId;

  // Veritabanında kısa URL'yi kontrol edin
  const longUrl = urlDatabase[shortId];

  // Eğer bulunursa, uzun URL'e yönlendirin
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    // Eğer bulunmazsa, 404 hatası gönderin
    res.status(404).send('URL not found');
  }
});

// Sunucuyu başlatın
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
