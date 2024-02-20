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
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [favoritos, setFavoritos] = useState('')

    const cadastraNovoContato = (event: FormEvent) => {
        event.preventDefault()

        dispatch(
            cadastrar({
                nome,
                telefone,
                email
            })
        )
        navigate ('/')
    }

    return (
        <MainContainer>
            <Titulo>Novo Contato</Titulo>
            <Form onSubmit={cadastraNovoContato}>
                <Campo
                value={nome}
                onChange={(evento) => setNome (evento.target.value)}
                type="text"
                placeholder= "Nome"
                />
                <Campo
                value={telefone}
                onChange={(evento) => setNome (evento.target.value)}
                type="number"
                placeholder= "Telefone"
                /><Campo
                value={email}
                onChange={(evento) => setNome (evento.target.value)}
                type="email"
                placeholder= "e-mail"
                />
                <Opcoes>
                    <p>Favorito</p>
                    {Object.values(enums.ListaFavorito).map((favoritos) => (
                        <Opcao key={favoritos}>
                            <input
                            value={favoritos}
                            name= "Favoritos"
                            type="radio"
                            onChange={(evento) => setFavoritos(evento.target.value as enums.ListaFavorito)}
                            id={favoritos}
                            defaultChecked={favoritos === enums.ListaFavorito.NORMAL}
                            />{' '}
                            <label htmlFor={favoritos}>{favoritos}</label>
                        </Opcao>  
                    ))}
                </Opcoes>
                <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </Form>
        </MainContainer>
    )
}

export default Formulario