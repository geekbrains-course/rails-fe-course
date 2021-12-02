process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// this is used as an example for lesson 4 only!
// please, do not used this in real project
// if you want to add some plugins or rules to your project - see environment.js for the reference
// webpackConfig.module = {
//   rules: [
//     ...webpackConfig.module.rules,
//     {
//       test: /\.svg/,
//       use: [
//         "file-loader"
//       ]
//     }
//   ]
// }
// webpackConfig.plugins = [
//   ...webpackConfig.plugins,
//   new webpack.ProgressPlugin()
// ]

// module.exports = webpackConfig
