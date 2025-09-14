import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo } from '../../styles'
import { Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [, setStatus] = useState(enums.Status.AMIGOS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        status: enums.Status.AMIGOS,
        email,
        numero: Number(numero)
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <label>Nome :</label>
        <S.Input
          type="text"
          placeholder="Adicione o nome"
          required
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <label>E-mail :</label>
        <S.Input
          type="email"
          placeholder="Adicione o E-mail"
          required
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <label>Numero :</label>
        <S.Input
          type="number"
          placeholder="Adicione o numero"
          required
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
        <Opcoes>
          <p>Status</p>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input
                value={status}
                name="status"
                type="radio"
                onChange={(evento) =>
                  setStatus(evento.target.value as enums.Status)
                }
                id={status}
                defaultChecked={status === enums.Status.AMIGOS}
              />{' '}
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Opcoes>
        <button type="submit">Salvar +</button>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
