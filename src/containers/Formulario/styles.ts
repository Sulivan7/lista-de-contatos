import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Input = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 6px;
  font-weight: bold;
  color: ${variaveis.azulForte};
  border: 1px solid ${variaveis.azulForte};
  width: 100%;
  outline: none;
  margin: 16px 0;
`
export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.cinza};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${variaveis.azulForte};
    margin-bottom: 6px;
    margin-top: 6px;
  }

  button {
    font-weight: bold;
    font-size: 12px;
    color: ${variaveis.branco};
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: ${variaveis.verde};
    border-radius: 4px;

    &:hover {
      background-color: ${variaveis.verdeForte};
    }
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 16px;
  }

  label {
    margin-right: 14px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
