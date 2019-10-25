const withAssetsImport = require('next-assets-import')
const withCSS = require('@zeit/next-css')
module.exports = withAssetsImport(withCSS() )



