module.exports = {
  siteMetadata: {
    title: `Arvind Pandey`,
    name: `Arvind`,
    siteUrl: `https://arvindpandey.in`,
    description: `My name is Arvind Pandey. I'm a Computer Science graduate from NIT Warangal. Other than writing code, I enjoy running too.`,
    hero: {
      heading: `The more you learn, the more you can learn.`,
      maxWidth: 1200,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/arvpande`,
      },
      {
        name: `github`,
        url: `https://github.com/arvind3157`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/therunnerinme`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/arvpande/`,
      },
      {
        name: `dribbble`,
        url: `#`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arvind Pandey`,
        short_name: `Arvind`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },
  ],
};
