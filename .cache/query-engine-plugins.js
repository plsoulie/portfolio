
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode17 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode18 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode19 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-image", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode17, importKey: 18 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode18, importKey: 19 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode19, importKey: 20 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "98794b7a-94dc-56c8-80d3-a33e7f2e57d6",
    "name": "gatsby-source-filesystem",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/Users/user/Portfolio GitHub/portfolio/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "896e3ae1-3981-5607-87e1-db2790923211",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "f2b9dd2e-e0c2-536b-8a7a-9c2e04b764fa",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "e04cdffd-5b4d-5031-b85c-7208e05da77f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "f172eac4-fc63-52ce-8048-2439848b3053",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "78f9cb46-4b18-54e6-8b43-d76fb524b24f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "82436250-1749-57a7-8232-83550bbbdb92",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "82f59cf3-23a7-58e0-86f9-85abbfc26dec",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "42deb74e-6645-5d10-a0f6-b69d88c26d8b",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-plugin-react-helmet/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "ffe1107b-e52a-5ec8-8707-cdf94bbc5d91",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-plugin-styled-components/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "da641aaf-9aba-579b-8680-d4e8017f4eaf",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-source-github-api/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "cca06866-ce75-5e5e-8305-e2a604e17187",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "bd2916ed-607f-58f5-8ecf-d4c9d993033e",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "1dd068a2-46a9-5301-943c-a9c1e8eaaceb",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  },
  {
    "resolve": "",
    "id": "b92de3ad-fb3c-5f4d-a393-45c70396a488",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 18
  },
  {
    "resolve": "",
    "id": "68ad7022-49dc-5672-a4a1-20de7150cf15",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 19
  },
  {
    "resolve": "",
    "id": "bd0240b8-d250-57e5-9e21-e277fde44b41",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/user/Portfolio GitHub/portfolio/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 20
  }
]
