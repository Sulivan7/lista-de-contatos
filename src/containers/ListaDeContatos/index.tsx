import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'
import Contato from '../../components/Contato'
import { Mensagem } from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (criterio === 'Status' && valor) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.status === valor
      )
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo as="p">{contatos.length} contato(s) encontrado(s)</Titulo>
      {itens.length === 0 ? (
        <Mensagem>Nenhum contato. Adicione um novo!</Mensagem>
      ) : (
        <ul>
          {contatos.map((c) => (
            <li key={c.id}>
              <Contato
                nome={c.nome}
                email={c.email}
                numero={c.numero}
                status={c.status}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      )}
    </MainContainer>
  )
}

export default ListaDeContatos
