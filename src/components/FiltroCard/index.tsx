import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'Status' | 'todos'
  valor?: enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const contatos = useSelector((state: RootReducer) => state.contatos)

  const verificaEstaAtivo = () => {
    if (criterio === 'todos') {
      return filtro.criterio === 'todos'
    }
    return filtro.criterio === 'Status' && filtro.valor === valor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'Status' && valor) {
      return contatos.itens.filter((item) => item.status === valor).length
    }
    return 0
  }

  const filtrar = () => {
    if (criterio === 'todos') {
      dispatch(
        alterarFiltro({
          criterio: 'todos',
          valor: undefined
        })
      )
    } else {
      dispatch(
        alterarFiltro({
          criterio: 'Status',
          valor
        })
      )
    }
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
