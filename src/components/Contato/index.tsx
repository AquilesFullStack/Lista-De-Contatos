import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alteraFav } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
    nome: nomeOriginal,
    favoritos,
    telefone: telefoneOriginal,
    id,
    email: emailOriginal
}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (nomeOriginal.length > 0) {
            setNome(nomeOriginal)
        }
    }, [nomeOriginal]);

    useEffect(() => {
        if (telefoneOriginal.toString().length > 0) {
            setTelefone(telefoneOriginal.toString())
        }
    }, [telefoneOriginal]);

    useEffect(() => {
        if (emailOriginal.length > 0) {
            setEmail(emailOriginal)
        }
    }, [emailOriginal])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setEmail(emailOriginal)
        setTelefone(telefoneOriginal.toString())
    }

    function alteraFavoritos(evento: ChangeEvent<HTMLInputElement>) {
        dispatch(
            alteraFav({
                id
            })
        )
    }

    return (

        <S.Card>
            <label htmlFor={nome}>
                <S.Titulo>
                    {estaEditando && <em>Editando:</em>}
                    {nome}
                </S.Titulo>
            </label>
            <S.Tag parametro='favoritos' favoritos={favoritos}>
                {favoritos}
            </S.Tag>
            <S.Telefone
                disabled={!estaEditando}
                value={telefone}
                onChange={(evento) => setTelefone(evento.target.value)}
            />
            <S.Email
                disabled={!estaEditando}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
            />
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <BotaoSalvar
                            onClick={() => {
                                dispatch(
                                    editar({
                                        id,
                                        nome,
                                        telefone: parseInt(telefone),
                                        email,
                                        favoritos
                                    })
                                )
                                setEstaEditando(false)
                            }}
                        >
                            Salvar
                        </BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                            Cancelar
                        </S.BotaoCancelarRemover>
                    </>
                ) : (
                    <>
                        <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                        <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                            Remover
                        </S.BotaoCancelarRemover>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
    )

}

export default Contato
