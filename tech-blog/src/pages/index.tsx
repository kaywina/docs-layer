import React from 'react';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>The Docs Layer 🚀</h1>
      <p>Technical documentation clean and simple.</p>

      <ul>
        <li>
          <Link to="/blog/first-blog-post">First Short Post</Link>
        </li>
        <li>
          <Link to="/blog/long-blog-post">Long Blog Post</Link>
        </li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        <Link className="button button--primary" to="/blog">
          View All Posts
        </Link>
      </p>
    </main>
  );
}
