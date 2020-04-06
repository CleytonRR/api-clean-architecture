module.exports = class ServerError extends Error {
  constructor () {
    super('internal Error')
    this.name = 'MissingParamError'
  }
}
