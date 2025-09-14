import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  email: string
  numero: number
  status: enums.Status
  id: number

  constructor(
    nome: string,
    email: string,
    numero: number,
    status: enums.Status,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.numero = numero
    this.status = status
    this.id = id
  }
}

export default Contato
