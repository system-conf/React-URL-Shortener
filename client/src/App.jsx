import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://www.sulo.uno//shorten",
        { longUrl }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      setError(
        "Kısaltma işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="App">
      <div className="copy">Created by <a href="https://suleymantalha.dev/" target="_blank">system.conf </a>/ <a href="https://github.com/system-conf/urlShorterReact" target="_blank">GitHub</a> / License</div>
      <div className="baslik">URL SHORTENER</div>
      <form onSubmit={handleSubmit}>
        <input className="box"
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Uzun URL'i girin"
        />
   &nbsp; &nbsp;
        <button type="submit" disabled={loading}>
          {loading ? "Kısaltılıyor..." : "Kısalt"}
        </button>
      </form>
      {error && <p>{error}</p>}
      {shortUrl && (
        <div>
          <p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <button onClick={handleCopy}>Kopyala</button>
        </div>
      )}
    </div>
  );
}

export default App;
