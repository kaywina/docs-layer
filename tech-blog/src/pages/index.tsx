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
      <main style={{ padding: '4rem 1rem', maxWidth: 800, margin: '0 auto' }}>
        <h1>⚔️ The Docs Layer ⚔️</h1>
        <p>Technical documentation clean and simple.</p>

        <ul>
          <li>
            <Link to="/blog/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/blog/costs-of-automation">Costs of Automation</Link>
          </li>
          <li>
            <Link to="/blog/automation-action-plan">Automation Action Plan</Link>
          </li>
        </ul>

        <p style={{ marginTop: '2rem' }}>
          <Link className="button button--primary" to="/blog">
            View All Posts
          </Link>
        </p>
      </main>
    </Layout>
  );
}
