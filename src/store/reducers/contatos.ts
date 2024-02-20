import { createSlice,  PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Aquiles',
            favoritos: enums.ListaFavorito.FAVORITO,
            telefone: +551195914703,
            email: 'aquilesnetto2002@gmail.com'
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },

        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id   
            )

            if (indexDoContato >= 0) {
                state.itens [indexDoContato] = action.payload
            }
        },

        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.itens.find(
                (contato) => 
                    contato.telefone === action.payload.telefone
            )

            if(contatoJaExiste){
                alert ('Já existe um contato com este número de telefone')
            } else {
                const ultimoContato  = state.itens[state.itens.lenght -1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }

                state.itens.push(contatoNovo)
            }
        },

        alteraFav: (
            state,
            action: PayloadAction<{id:number; favorito: boolean}>
        ) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoContato >= 0) {
                state.itens[indexDoContato].favoritos = action.payload.favorito
                ? enums.ListaFavorito.FAVORITO : ''
            }
        }

    }
}) 

export const { remover, editar, cadastrar, alteraFav } = contatosSlice.actions

export default  contatosSlice.reducer   