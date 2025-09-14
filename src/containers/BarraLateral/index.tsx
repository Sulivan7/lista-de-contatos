import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao } from '../../components/Contato/styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.FAMILIA}
                criterio="Status"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Status.AMIGOS}
                criterio="Status"
                legenda="Amigos"
              />
              <FiltroCard
                valor={enums.Status.PROFICIONAL}
                criterio="Status"
                legenda="Proficional"
              />
              <FiltroCard
                valor={enums.Status.PROFICIONAL}
                criterio="todos"
                legenda="Todos"
              />
            </S.Filtros>
            <BotaoAdicionar />
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar a lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
