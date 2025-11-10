import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 32 }}>
      <Head>
        <title>Unbiased AI News</title>
        <meta name="description" content="True, unbiased journalism powered by AI. Aggregating facts and perspectives from all major sources." />
      </Head>
      <h1>Unbiased AI News</h1>
      <p>
        This website delivers the truth by combining stories from every major news outlet, applying advanced AI to highlight facts, call out bias, and offer radically transparent journalism.
      </p>
      <ul>
        <li>Aggregates news from AP, Reuters, NYT, Fox, CNN, BBC, Bloomberg, Al Jazeera and more</li>
        <li>Factual reporting, bias detection, transparent methodology</li>
        <li>Source links for every story, editorial pipeline and disclosure</li>
        <li>User feedback welcomed on every story</li>
      </ul>
      <p>To start, MVP will list sample stories and show how bias is detected and removed. Next steps: connect source APIs, build backend, deploy bias removal logic.</p>
      <p><b>Version:</b> Proof-of-Concept Bootstrap</p>
    </div>
  );
}
