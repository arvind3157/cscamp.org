module.exports = {
  siteMetadata: {
    title: `Arvind Pandey | Personal Blog`,
    name: `Arvind Pandey`,
    siteUrl: `https://arvindpandey.in`,
    description: `This is personal blog by Arvind Pandey. He writes on core computer science and his personal experience in running.`,
    hero: {
      heading: `A portal for Computer Science enthusiasts.`,
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
      }
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
        name: `arvindpandey.in`,
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
        trackingId: "UA-174093877-1",
      },
    },
  ],
};
