import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../modules/Contato'
import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  nome: nomeOriginal,
  numero: numeroOriginal,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(Number)

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (numeroOriginal.valueOf() > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Titulo>
      <S.Tag status={status}>{status}</S.Tag>
      <S.FormGroup>
        <S.Input
          disabled={!estaEditando}
          value={nome}
          id="nome"
          placeholder="Digite o nome"
          onChange={(evento) => setNome(evento.target.value)}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Input
          disabled={!estaEditando}
          value={email}
          id="email"
          placeholder="Digite o E-mail"
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Input
          disabled={!estaEditando}
          value={numero}
          id="contato"
          placeholder="Digite o número"
          onChange={(evento) => setNumero(Number(evento.target.value))}
        />
      </S.FormGroup>

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    id,
                    nome,
                    numero,
                    status
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
