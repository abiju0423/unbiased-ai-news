import React, { useEffect, useState } from 'react';

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/headlines')
      .then((res) => res.json())
      .then((data) => {
        setHeadlines(data.results || []);
      })
      .catch((e) => setError(e.toString()));
  }, []);

  if (error) return <div>Error fetching headlines: {error}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>Latest Aggregated Headlines</h2>
      {headlines.length === 0 ? (
        <p>Loading headlines…</p>
      ) : (
        <ul>
          {headlines.map(({ source, articles, error }) => (
            <li key={source} style={{ marginBottom: 16 }}>
              <b>{source.toUpperCase()}</b>
              {error ? (
                <div style={{ color: 'red' }}>API Error: {error}</div>
              ) : articles ? (
                <ul>
                  {articles.map((a) => (
                    <li key={a.url}>
                      <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a> <span>- {a.author || 'N/A'}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
