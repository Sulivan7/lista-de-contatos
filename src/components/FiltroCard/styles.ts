import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 6px;
  border: 1px solid
    ${(props) =>
      props.ativo ? `${variaveis.azulForte}` : `${variaveis.azulClaro}`};
  background-color: ${(props) =>
    props.ativo ? `${variaveis.azul3}` : `${variaveis.azulForte}`};
  color: ${variaveis.branco};
  border-radius: 16px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 22px;
  display: block;
  margin-left: 10px;
`

export const Label = styled.span`
  font-size: 14px;
  margin-left: 10px;
`
