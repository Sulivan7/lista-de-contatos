import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  status?: enums.Status
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === enums.Status.FAMILIA) return variaveis.rosa
    if (props.status === enums.Status.AMIGOS) return variaveis.azulClaro
    if (props.status === enums.Status.PROFICIONAL) return variaveis.azulForte
  }
  return variaveis.cinza
}

export const Card = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 18px;
  margin-bottom: 32px;
  border-radius: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const Tag = styled.span<TagProps>`
  padding: 6px 8px;
  color: ${variaveis.branco};
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 6px;
  display: inline-block;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.amareloFraco};
  border-radius: 6px;
  margin-right: 12px;
`

export const Input = styled.input`
  padding: 6px;
  background-color: ${variaveis.branco2};
  border-radius: 4px;
  font-weight: bold;
  color: ${variaveis.azulForte};
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
