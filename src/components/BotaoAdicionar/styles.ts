import variaveis from '../../styles/variaveis'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BotaoCriarContato = styled(Link)`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  background-color: ${variaveis.verdeForte};
  border-radius: 6px;
  margin-top: 16px;
  width: 100%;
  text-decoration: none;

  &:hover {
    background-color: ${variaveis.verde};
  }
`
