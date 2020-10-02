const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Boilerplate',
    description: 'A React boilerplate w/ TypeScript',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Boilerplate',
        description: 'A React boilerplate w/ TypeScript',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/andreasjj/Documents/GitHub/React-Boilerplate',
          templates:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/node_modules/docz-core/dist/templates',
          docz: '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz',
          cache:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/.cache',
          app: '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app',
          appPackageJson:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/package.json',
          appTsConfig:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/tsconfig.json',
          gatsbyConfig:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/gatsby-config.js',
          gatsbyBrowser:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/gatsby-browser.js',
          gatsbyNode:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/gatsby-node.js',
          gatsbySSR:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/gatsby-ssr.js',
          importsJs:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app/imports.js',
          rootJs:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app/root.jsx',
          indexJs:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app/index.jsx',
          indexHtml:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app/index.html',
          db:
            '/Users/andreasjj/Documents/GitHub/React-Boilerplate/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
