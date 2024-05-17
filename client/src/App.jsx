import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      setError('Kısaltma işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>URL Kısaltıcı</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Uzun URL'i girin"
        />
        <button type="submit" disabled={loading}>{loading ? 'Kısaltılıyor...' : 'Kısalt'}</button>
      </form>
      {error && <p>{error}</p>}
      {shortUrl && (
        <div>
          <p>Kısaltılmış URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
}

export default App;
