class Encrypter {
  compare (password, hashpassword) {
    this.password = password
    this.hashpassword = hashpassword
  }
}

class Auth {
  constructor (encrypter) {
    this.encrypter = encrypter
  }

  entrar () {
    this.encrypter.compare('any_password', 'any_two_password')
    console.log(this.encrypter.password)
    console.log(this.encrypter.hashpassword)
  }
}

const makeSut = () => {
  const encrypter = new Encrypter()
  const autenticar = new Auth(encrypter)

  return autenticar
}

const autenticar = makeSut()

autenticar.entrar()
