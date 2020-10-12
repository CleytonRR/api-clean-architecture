module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:xx/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || 'secret'
}
