module.exports = {
  siteMetadata: {
    title: `CsCamp | A Portal for Computer Science Enthusiast`,
    name: `CsCamp`,
    siteUrl: `https://www.cscamp.org`,
    description: `CsCamp.org is a portal for the geeks to learn coding. It focuses on core computer science topics.`,
    hero: {
      heading: `A portal for Computer Science enthusiast.`,
      maxWidth: 652,
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
        authorsPage: true,
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        pageLength: 16,
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CsCamp.org`,
        short_name: `CsCamp`,
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
        trackingId: "UA-174093877-1",
      },
    },
  ],
};
