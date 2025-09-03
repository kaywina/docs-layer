import React, {JSX} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const heroAltText = `Black-and-white line art Docs Layer logo of a girl with long hair
in a dress standing on a hill, holding a shield and sword, facing a fierce dragon.
The dragon breathes fire made of binary code (ones and zeros), symbolizing
overwhelming digital information. The girl’s shield deflects the flame,
while her sword represents readiness to cut through complexity. The dragon
embodies technical chaos, while the figure stands for clarity and resilience
in documentation. Beneath the scene, the words “THE DOCS LAYER” appear —
a pun that also reads as “Doc Slayer,” underscoring the brand’s mission of
defending against unruly and overly-complex documentation.`;

export default function Home(): JSX.Element {
  return (
    <Layout>
      <head>
        <title>Home</title>
        <meta name="description" content="The Docs Slayer Landing Page" />
      </head>
      <main style={{ padding: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
        <h1>⚔️ The Docs Layer ⚔️</h1>
        <img src="img/hero.png" title= {heroAltText} alt={heroAltText} width="256"></img>
        <p>Technical documentation clean and simple.</p>
        <Link to="/blog/welcome">Welcome Note from the Author</Link>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="button button--primary" to="/blog">
            View Posts
          </Link>
        </p>
      </main>
    </Layout>
  );
}
