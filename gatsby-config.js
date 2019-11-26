require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Addicts by Svirins`,
    name: `Addicts`,
    siteUrl: `https://addict.cf`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Addictive disorders are a group of disorders that can cause physical and psychological damage. <br/>Receiving treatment is essential for breaking the cycle of addiction.`,
      maxWidth: 1652, 
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/svirins`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `facebook`,
        url: `https://facebook.com/`,
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
        authorsPage: true,
        mailchimp: true, 
        sources: {
          local: false,
          contentful: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=041794295b67fd11f7a444e14&amp;id=a1afdb19e5', // add your MC list endpoint here; see plugin repo for instructions
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {       
        name: "Addicts by Svirins",
        short_name: "PSY H",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `el_pinche`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144919197-2",
        anonymize: true,
      },
    },
  ]
};