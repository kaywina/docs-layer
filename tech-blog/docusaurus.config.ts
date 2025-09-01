import {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'The Docs Layer', 
  tagline: 'Technical documentation clean and simple.',
  url: 'https://kaywina.github.io',   // 🔹 change to your GitHub Pages URL later
  baseUrl: '/docs-layer/',
  favicon: 'img/favicon.ico',

  organizationName: 'kaywina', // 🔹 replace with GitHub user/org
  projectName: 'docs-layer',            // 🔹 replace with repo name

  presets: [
    [
      'classic',
      {
        docs: false, // no docs
        blog: {
          routeBasePath: '/blog',   // blog lives at /blog
          showReadingTime: true,
        },
        pages: {},                  // allow /src/pages
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'The Docs Layer',
      logo: {
        alt: 'Doc Slayer Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kaywina/docs-layer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true, disableSwitch: false},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
