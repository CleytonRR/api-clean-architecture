const { MissingParamError, InvalidParamError } = require('../../utils/erros')
const httpResponse = require('../helpers/http-response')

module.exports = class LoginRouter {
  constructor ({ authUseCase, emailValidator } = {}) {
    this.authUseCase = authUseCase
    this.emailValidator = emailValidator
  }

  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return httpResponse.badRequest(new MissingParamError('email'))
      }
      if (!this.emailValidator.isValid(email)) {
        return httpResponse.badRequest(new InvalidParamError('email'))
      }
      if (!password) {
        return httpResponse.badRequest(new MissingParamError('password'))
      }
      const acessToken = await this.authUseCase.auth(email, password)
      if (!acessToken) {
        return httpResponse.unauthorizedError()
      }
      return httpResponse.ok({ acessToken })
    } catch (error) {
      return httpResponse.serverError()
    }
  }
}
