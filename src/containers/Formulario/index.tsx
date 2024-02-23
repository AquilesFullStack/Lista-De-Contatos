import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import  { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from  '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import  * as enums from '../../utils/enums/Contato'
 
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState<number>(0)
    const [email, setEmail] = useState('')
    const [favoritos, setFavoritos] = useState(enums.ListaFavorito.NORMAL)

    const cadastraNovoContato = (event: FormEvent) => {
        event.preventDefault()

        dispatch(
            cadastrar({
                nome,
                telefone,
                email,
                favoritos
            })
        )
        navigate ('/')
    }

    return (
        <MainContainer>
            <Titulo>Agenda</Titulo>
            <Form onSubmit={cadastraNovoContato}>
                <Campo
                value={nome}
                onChange={(evento) => setNome (evento.target.value)}
                type="text"
                placeholder= "Nome"
                />
                <Campo 
                value={telefone}
                onChange={(evento) => setTelefone(parseInt(evento.target.value))}
                type="number"
                placeholder= "Telefone"
                />
                <Campo
                value={email}
                onChange={(evento) => setEmail (evento.target.value)}
                type="email"
                placeholder= "E-mail"
                />
                <Opcoes>
                    <p>Favoritos</p>
                    {Object.values(enums.ListaFavorito).map((favorito) => (
                        <Opcao key={favorito}>
                            <input
                            value={favorito}
                            name= "favoritos"
                            type="radio"
                            onChange={(evento) => setFavoritos(evento.target.value as enums.ListaFavorito)}
                            id={favorito}
                            checked={favoritos === favorito}
                            /><span>
                                <label htmlFor={favorito}>{favorito}</label>
                            </span>
                        </Opcao>  
                    ))}
                </Opcoes>
                <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </Form>
        </MainContainer>
    )
}

export default Formulario