import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webPackDevClientConfig from './webpack.dev-client.js'

const PORT = process.env.PORT || 5000

const showSuccessAfterInit = () => {
  console.log(
    `Server listening on \x1b[42m\x1b[1mhttp://localhost:${PORT}\x1b[0m in \x1b[41m${process
      .env.NODE_ENV}\x1b[0m 🌎...`
  )
}

const compiler = webpack(webPackDevClientConfig)

var webPackServer = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  writeToDisk: true
})

webPackServer.listen(PORT, 'localhost', () => {
  showSuccessAfterInit()
})
