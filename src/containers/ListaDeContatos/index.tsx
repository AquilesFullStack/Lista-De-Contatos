import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

type Props = {
    mostrarFiltros: boolean
}

const ListaDeContatos = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)
    

    const filtraContatos = () => {
        let contatosFiltrados = itens
        if (termo !== undefined) {
            contatosFiltrados = contatosFiltrados.filter(
                (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
            )

            if (criterio === 'favoritos') {
                contatosFiltrados = contatosFiltrados.filter(
                    (item) => item.favoritos === valor
                )
            }
            return contatosFiltrados
        } else {
            return itens
        }
    }

    const exibeResultatoFiltragem = (quantidade: number) => {
        let mensagem = ''
        const complementacao =
            termo !== undefined && termo.length >0 ? `e "${termo}"` : ''

        if (criterio === 'todas'){
            mensagem = `${quantidade} contatos(s) encontrado(s) como: todas ${complementacao}`
        } else {
            mensagem = `${quantidade} tarefas(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
        }
        return mensagem
    }

    const contatosFiltrados = filtraContatos()
    const mensagem = exibeResultatoFiltragem(contatosFiltrados.length)

    return (
        <MainContainer>
            <p>{mensagem}</p>
            <ul>
                {contatosFiltrados.map((c) => (
                    <li key={c.nome}>
                        <Contato
                            id={c.id}
                            telefone={c.telefone}
                            nome={c.nome}
                            email={c.email}
                            favoritos={c.favoritos}
                        />
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeContatos