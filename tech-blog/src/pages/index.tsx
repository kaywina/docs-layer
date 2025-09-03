import React, {JSX} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <head>
        <title>Home</title>
        <meta name="description" content="The Docs Slayer Landing Page" />
      </head>
      <main style={{ padding: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
        <h1>⚔️ The Docs Layer ⚔️</h1>
        <img src="img/hero.png" alt="The Docs Layer logo" width="256"></img>
        <p>Technical documentation clean and simple.</p>
        <Link to="/blog/welcome">Welcome</Link>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="button button--primary" to="/blog">
            View All Posts
          </Link>
        </p>
      </main>
    </Layout>
  );
}
